import shopReducer from "../reducer/ShopReducer";
import { createContext, useReducer, useContext, useEffect, useState } from "react";
import { initialState, ShopContextValue, Product, ShopProviderProps } from "../utils/Shopinterface";
import localforage from "localforage";

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const [cartlocal, setCartlocal] = useState<Product[]>([]);

  useEffect(() => {
    // Load cart data from localforage on mount
    const loadCartData = async () => {
      const savedCart = await localforage.getItem<Product[]>("cartLocal");
      if (savedCart) {
        setCartlocal(savedCart);
        updatePrice(savedCart);
        dispatch({
          type: "LOAD_CART",
          payload: {
            products: savedCart,
          },
        });
      }
    };
    loadCartData();
  }, []);

  useEffect(() => {
    // Save cart data to localforage whenever it changes
    console.log("yaya use mai",cartlocal)
    localforage.setItem("cartLocal", cartlocal);
  }, [cartlocal]);

  const addToCart = (product: Product) => {
    const updatedCart = [...cartlocal, product];
    setCartlocal(updatedCart);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = cartlocal.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    setCartlocal(updatedCart);
    updatePrice(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products: Product[]) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };
const clearCart=()=>{
  const updatedCart:Product[] = []
  setCartlocal(updatedCart);
  updatePrice(updatedCart);
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      products: updatedCart,
    },
  });
}
  const value: ShopContextValue = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = (): ShopContextValue => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopProvider");
  }

  return context;
};

// Define a type for a single product
export  interface Product {
    id: number;
    image: string;
    price: number;
    title:string
  }
  
  // Define the shape of the state
  export interface State {
    total: number;
    products: Product[];
  }
  
  // Define the possible action types
  export type Action =
  | { type: "ADD_TO_CART"; payload: { products: Product[] } }
  | { type: "REMOVE_FROM_CART"; payload: { products: Product[] } }
  | { type: "UPDATE_PRICE"; payload: { total: number } }
  | { type: "LOAD_CART"; payload: { products: Product[] } }; // Add LOAD_CART action type

  
  // Define the initial state
  export const initialState: State = {
    total: 0,
    products: []
  };
  


  export interface ShopContextValue {
    total: number;
    products: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    clearCart:(product:Product)=>void;
  }
  
  // Define the provider props
  export interface ShopProviderProps {
    children: React.ReactNode;
  }


  export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

 export interface CartItemProps {
    item: Product;
    itemIndex: number;
  }
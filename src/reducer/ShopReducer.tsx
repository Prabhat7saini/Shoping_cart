// ShopReducer.tsx
import { Reducer } from "react";
import { Action, State } from "../utils/Shopinterface";

const shopReducer: Reducer<State, Action> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total,
      };

    case "LOAD_CART":
      return {
        ...state,
        products: payload.products,
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer; 
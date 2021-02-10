import {ADD_QUANTITY, SUB_QUANTITY, ADD_TO_CART} from "./actionType";

export const addToCart = id => {
    return {
      type: ADD_TO_CART,
      id
    };
  };
  
  export const subtractQuantity = id => {
    return {
      type:SUB_QUANTITY,
      id,
    };
  };
  export const addQuantity = id => {
    return {
      type:ADD_QUANTITY,
      id,
    };
  };
 
  
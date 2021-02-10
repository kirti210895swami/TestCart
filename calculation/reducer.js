import {ADD_QUANTITY, SUB_QUANTITY, ADD_TO_CART} from "./actionType";

const initialState = {
    products: [],
  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id ? {...product, selected: true} : product,
          ),
        };
      
      case ADD_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      case SUB_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,
          ),
        };
      
      default:
        return state;
    }
  };
  export {ShoppinReducer};
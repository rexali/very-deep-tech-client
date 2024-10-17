// reducer.js
import { ActionTypes } from '../actions/app-actions';

const reducer = (state: any, action: any) => {

  switch (action.type) {

    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case ActionTypes.POST_PRODUCT:
      return {
        ...state,
        result: action.payload
      };

    case ActionTypes.GET_CARTS:
      return {
        ...state,
        carts: action.payload
      };

    case ActionTypes.POST_CART:
      return {
        ...state,
        result: action.payload
      };

    default:
      return state;
  }

};

export default reducer;

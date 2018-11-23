import {   DELETE_PRODUCT, FETCH_PRODUCT_BY_ID, FETCH_PRODUCT, FETCH_ALL_PRODUCTS} from "constants/ActionTypes";
 
export default function ProductReducer(state = [], action) {
  switch (action.type) { 
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.payload.id);
    case FETCH_PRODUCT:
      return action.products;
    case FETCH_ALL_PRODUCTS: 
    return action.products; 
     default:
      return state;
  }
}
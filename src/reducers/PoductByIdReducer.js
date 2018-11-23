import {    FETCH_PRODUCT_BY_ID } from "constants/ActionTypes";
export default function PoductByIdReducer(state = [], action) {
  switch (action.type) { 
   case FETCH_PRODUCT_BY_ID:
   return action.prodid ;
    default:
      return state;
  }
}
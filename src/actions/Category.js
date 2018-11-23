import {  FETCH_CATEGORY } from  "constants/ActionTypes";
import axios from  "axios";
const apiUrl =  "http://localhost:4000/categories"
  
export const fetchCategories = (categories) => {
  return {
    type: FETCH_CATEGORY,
    categories
  }
};

export const fetchAllCategories = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchCategories(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};
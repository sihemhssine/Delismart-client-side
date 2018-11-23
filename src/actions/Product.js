import {    FETCH_PRODUCT, FETCH_PRODUCT_BY_ID, FETCH_ALL_PRODUCTS  } from "constants/ActionTypes";
import axios from "axios";


const apiUrl = "http://localhost:4000/products";

export const findProdByCategory = (products) => {
  return {
    type: FETCH_PRODUCT,
    products
  }
};

export const findProdByCat = category => {
 
  return (dispatch) => {
    return axios.get(`${apiUrl}/findByCategory/${category}`)   
      .then(response => {
        dispatch(findProdByCategory(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};      

export const findProductById = (prodid) => {
  return {
    type: FETCH_PRODUCT_BY_ID,
    prodid
  }
};

export const findProdById = id  => {
    return (dispatch) => {
   return axios.get(`${apiUrl}/findById/${id}`)   
      .then(response => {
         dispatch(findProductById(response.data))
        })
      .catch(error => {
        throw (error);
        });
  };
};

export const fetchProducts = (products) => {
  return {
    type: FETCH_ALL_PRODUCTS,
    products
  }
};

export const fetchAllProducts = () => {
 

  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => { 
        dispatch(fetchProducts(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

 
 
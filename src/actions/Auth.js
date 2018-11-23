import axios from "axios";
import { GET_ERRORS,DELETE_WISHLIST, EDIT_WISH_LIST, EDIT_PROFILE,  SET_CURRENT_USER, EDIT_SHOPPING_LIST } from "../constants/ActionTypes";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

const apiUrl = "http://localhost:4000/users";

export const registerUser = (user, history) => dispatch => {
    console.log("userr ", user); 
    axios.post(`${apiUrl}/register`, user)
            .then(res => console.log("welcome "))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
     axios.post( `${apiUrl}/login`, user)
            .then(res => {
                const { token } = res.data;
                 localStorage.setItem("jwtToken", token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => { 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push("/");
}

export const updateSuccess = (data) => ({
    type: "EDIT_SHOPPING_LIST",
  payload: {
    _id: data._id,
    name: data.name, 
    email: data.email, 
    password: data.password, 
    fullname: data.fullname, 
    tel: data.tel, 
    country: data.country, 
    addr: data.addr, 
    shippingaddr: data.shippingaddr, 
    status : data.status, 
    shoppingcard: data.shoppingcard, 
    avatar: data.avatar, 
    date: data.date, 
    wishlist : data.wishlist
    
  }/*  */
  });
  export const updateShoppingList = (idUser,idProd) => {
    console.log("user", idProd  ); 
    return (dispatch) =>{
    return axios.get(`${apiUrl}/updateShoppingList/`,{
      params:{
        idUser,idProd  
      }
    })
    .then(response => {
      dispatch(updateSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    });
   }
  };

  export const updateWishListSuccess = (data) => ({
    type: "EDIT_WISH_LIST",
  payload: {
    _id: data._id,
    name: data.name, 
    email: data.email, 
    password: data.password, 
    fullname: data.fullname, 
    tel: data.tel, 
    country: data.country, 
    addr: data.addr, 
    shippingaddr: data.shippingaddr, 
    status : data.status, 
    shoppingcard: data.shoppingcard, 
    avatar: data.avatar, 
    date: data.date,
    wishlist : data.wishlist
  } 
  });
  export const updateWishList = (idUser,idProd) => {
  console.log("props", idProd, idUser); 
    return (dispatch) =>{
    return axios.get(`${apiUrl}/updateWishList/`,{
      params:{
        idUser,idProd  
      }
    })
    .then(response => {
      dispatch(updateWishListSuccess(response.data))
    })
    .catch(error => {
       throw (error);
    });
   }
  };

  export const editProfileSuccess = (data) => ({
    type: 'EDIT_PROFILE',
  payload: {
    _id: data._id,
    name: data.name, 
    email: data.email, 
    password: data.password, 
    fullname: data.fullname, 
    tel: data.tel, 
    country: data.country, 
    addr: data.addr, 
    shippingaddr: data.shippingaddr, 
    status : data.status, 
    shoppingcard: data.shoppingcard, 
    avatar: data.avatar, 
    date: data.date,
    wishlist : data.wishlist
    
  }/*  */
  });
  export const editProfile  = (idUser, newEmail) => {
     return (dispatch) =>{
    return axios.get(`${apiUrl}/updateProfile/`,{
      params:{
        idUser ,newEmail
      }
    })
    .then(response => {
      dispatch(editProfileSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    });
  }
  };
  export const deleteWishlistSuccess = (data) => ({
    type: 'DELETE_WISHLIST',
  payload: {
    _id: data._id,
    name: data.name, 
    email: data.email, 
    password: data.password, 
    fullname: data.fullname, 
    tel: data.tel, 
    country: data.country, 
    addr: data.addr, 
    shippingaddr: data.shippingaddr, 
    status : data.status, 
    shoppingcard: data.shoppingcard, 
    avatar: data.avatar, 
    date: data.date,
    wishlist : data.wishlist  
  }
  }); 
  export const deleteWishlist  = (idUser)=>{
     return (dispatch)=>{
      return axios.get(`${apiUrl}/deleteWishlist/`, {
        params: {
          idUser 
        }
      })
      .then(response=>{
        dispatch(deleteWishlistSuccess(response.data))
      })
      .catch(error =>{
        throw (error); 
      })
    }
  }

  
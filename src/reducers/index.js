import {combineReducers} from  "redux"
import {routerReducer} from  "react-router-redux"
import Categories from "./CategoryReducer";
import Products from "./ProductReducer";
import ErrorReducer from "./ErrorReducer";
import AuthReducer from "./AuthReducer";
import PoductByIdReducer from "./PoductByIdReducer"; 
const reducers = combineReducers({
    routing: routerReducer,
    categories: Categories, 
    products: Products,
    errors: ErrorReducer,
    auth: AuthReducer, 
    prodid : PoductByIdReducer
})

export default reducers; 

import { SET_CURRENT_USER, EDIT_WISH_LIST,  DELETE_WISHLIST , EDIT_PROFILE } from "../constants/ActionTypes";
import isEmpty from "../validation/is-empty";

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
     switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload 
            } 
        case EDIT_PROFILE :
        return {
         ...state , 
         user : action.payload    
        }
        case DELETE_WISHLIST :
        return {
         ...state , 
         user : action.payload    
        } 
        case EDIT_WISH_LIST :
        return{
            ...state, 
            user : action.payload 
        }
        default: 
            return state;
    }
}
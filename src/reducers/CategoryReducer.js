import {FETCH_CATEGORY} from "constants/ActionTypes";
export default function CategoryReducer(state=[], action){
    switch (action.type) {
      case FETCH_CATEGORY:
        return action.categories; 
      default: 
         return state;   
    }
}

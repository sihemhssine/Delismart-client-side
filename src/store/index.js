
import { createStore, applyMiddleware} from  "redux"  
import thunk from  "redux-thunk"  
import createHistory from  "history/createBrowserHistory"  
import reducers from "../reducers/index"  
import { composeWithDevTools } from  "redux-devtools-extension"  
import { fetchAllCategories } from  "../actions/Category"
import { fetchAllProducts } from "../actions/Product";
import { deleteWishlist } from "../actions/Auth";

const history = createHistory()   
export default function configureStore(initialState) {
 
    const store = createStore(reducers, initialState,
           composeWithDevTools(
               applyMiddleware(
                thunk)  ) )
      store.dispatch(fetchAllCategories() ); 
      store.dispatch(fetchAllProducts() );
        return store  
   
 }
export {history}   


import React from "react";
 import { Provider } from "react-redux";
import { Route, Switch,Router } from "react-router-dom";
import configureStore, { history } from "./store";
import App from "./containers/App";
export const store = configureStore();
const MainApp = () => 
    <Provider store={store}>
        <Router history={history}>
            <Switch>
          <Route path="/" component={App} />
            </Switch>
        </Router> 
    </Provider>;
     
export default MainApp;
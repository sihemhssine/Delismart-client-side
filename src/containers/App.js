import React, {Component} from "react";
import { Redirect,  Route, Switch} from "react-router-dom";
import MainApp from "app/index";

const RestrictedRoute = ({component: Component, ...rest}) =>
<Route
    {...rest}
    render={props =>
              <Component {...props} />
        }
/>;



class App extends Component {
   render() {
   const {location, match }= this.props; 
   if (location.pathname === "/") {
   return ( <Redirect to={"/app/dashboard/default"}/> );
    }
    return (  
    <div>
   <Switch> 
     <RestrictedRoute path={`${match.url}app`}  
   component={MainApp}/>
      </Switch>
    </div>
    );
    }
}
 
export default App;

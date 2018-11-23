import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const User  = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/user`}/>
            <Route path={`${match.url}/loginpage`} component={asyncComponent(() => import('./routes/LoginPage'))}/>           
            <Route path={`${match.url}/shoppingcart`} component={asyncComponent(() => import('./routes/ShoppingCart'))}/>                       
            <Route path={`${match.url}/useraccount`} component={asyncComponent(() => import('./routes/UserAccount'))}/>                       
            <Route path={`${match.url}/wishlist`} component={asyncComponent(() => import('./routes/Wishlist'))}/>                                  
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);


export default User;
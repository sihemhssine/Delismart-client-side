import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Product  = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/product`}/>
            <Route path={`${match.url}/productgrid`} component={asyncComponent(() => import('./routes/ProductGrid'))}/>
            <Route path={`${match.url}/productdetails`} component={asyncComponent(() => import('./routes/ProductDetails'))}/>            
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default Product;
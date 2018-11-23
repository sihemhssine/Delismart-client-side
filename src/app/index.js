
import React from "react";
import {Route, Switch } from "react-router-dom";
 import Dashboard from "./routes/dashboard";
import asyncComponent from 'util/asyncComponent';
import Product from "./routes/product";
import User from "./routes/user";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import { connect } from "react-redux";
 

class App extends React.Component {
    constructor(props){
        super(props) ; 
    }
    render() {
        const {match } = this.props;
           return (
            <div id = "page" >
              <Header history= {this.props.history}/>    
              <div className="content">
                        <div>
                            <Switch> 
                                <Route path={`${match.url}/dashboard`} component={Dashboard}/>
                                <Route path={`${match.url}/product`} component={Product}/>  
                                <Route path={`${match.url}/user`} component={User}/>                                
                                <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
                            </Switch>
                        </div>
               <Footer/> 
               </div>  
               </div>   
              
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(App) ; 
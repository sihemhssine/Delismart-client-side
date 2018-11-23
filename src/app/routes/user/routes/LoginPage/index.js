import React from "react"; 
import Subscribe from "../../../../../components/User/Subscribe";
import Login from "../../../../../components/User/Login";  
import { connect } from "react-redux";
class LoginPage extends React.Component {
    constructor(props ){
        super(props); 
      }
 
render(){ 
     return(
    <div className="main-container col1-layout wow bounceInUp animated animated" style={{visibility: "visible"}}>     
    <div className="main">                     
  <div className="account-login container">

 
      <fieldset className="col2-set">
        <Login data = {this.props.history} /> 
        <Subscribe  data = {this.props.history} />
         
    </fieldset> 
</div> 
       </div>     
      </div> 
   )
}}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LoginPage) ; 
import React from "react"; 
import {registerUser} from "../../actions/Auth"; 
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class Subscribe extends React.Component{
    constructor(props){
        super(props); 
        this.state= {
            name: "",
            email: "",
            password: "",
            password_confirm:"",
            fullname:"", 
            addr:"",   
            shippingaddr:"", 
            tel: "", 
            country:"",
            errors: {}
        } 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            tel: this.state.tel, 
            country : this.state.country, 
            addr: this.state.addr,
            shippingaddr: this.state.shippingaddr, 
            fullname: this.state.fullname,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.data)
        
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.data.push("/")
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.data.push("/");
        }
    }


    render(){
        const { errors } = this.state;
    return(
        
      <div className="col-2 registered-users">
        <form onSubmit={ this.handleSubmit }>
         <strong>I'm New Customer </strong>   
            <div className="content">    
               <ul className="form-list">
                 <li>
                    <label > FullName </label>
                        <div className="input-box">
                         <input type="text" name="fullname" value={this.state.fullname}  onChange={ this.handleInputChange }
                             id="name" className={classnames("input-text required-entry validate-email" , {"is-invalid": errors.fullname})} title="Fullname"/>
                        {errors.fullname && (<div style= {{color : "red"}}>{errors.fullname}</div>)}
                        </div>
                    </li>
                     <li>
                         <label >User Name </label>
                        <div className="input-box">
                         <input type="text" name="name" value={this.state.name}  onChange={ this.handleInputChange }
                             id="name" className={classnames("input-text required-entry validate-email" , {"is-invalid": errors.name})} title="Email Address"/>
                        {errors.name && (<div style= {{color : "red"}}>{errors.name}</div>)}
                       </div>
                    </li>
                    <li>
                         <label>Email Address </label>
                        <div className="input-box">
                            <input type="email" name="email" value={this.state.email} onChange={ this.handleInputChange }  
                            className={classnames("input-text required-entry validate-email",{"is-invalid": errors.email} )} title="Email Address"/>
                        {errors.email && (<div style= {{color : "red"}}>{errors.email}</div>)}
                         </div>
                    </li>
                    <li>
                     <label>Password </label>
                        <div className="input-box">
                            <input type="password" name="password" value= {this.state.password}
                            onChange={ this.handleInputChange }
                             className={classnames("input-text required-entry validate-password", {"is-invalid": errors.password})} id="pass" title="Password"/>
                        {errors.password && (<div style= {{color : "red"}}>{errors.password}</div>)}
                        
                        </div>
                    </li>
                    <li>
                     <label>Confirm Password </label>
                        <div className="input-box">
                            <input type="password" name="password_confirm" value={this.state.password_confirm}
                            onChange={ this.handleInputChange } 
                            className={classnames("input-text required-entry validate-password",{"is-invalid": errors.password_confirm} )}id="pass_confirm" title="Password"/>
                            {errors.password_confirm && (<div style= {{color: "red"}}>{errors.password_confirm} </div>)}
                        </div>
                    </li>
                     <li>
                       <label> Address  </label>
                        <div className="input-box">
                            <input type="text" name="addr" value={this.state.addr}
                            onChange={ this.handleInputChange } 
                            className={classnames("input-text required-entry validate-email",{"is-invalid": errors.addr} )}id="address" title="Address"/>
                            {errors.addr && (<div style= {{color: "red"}}>{errors.addr } </div>)}
                        </div>
                    </li>
                    <li>
                    <label> Shipping Address  </label>
                     <div className="input-box">
                         <input type="text" name="shippingaddr" value={this.state.shippingaddr}
                         onChange={ this.handleInputChange }
                         className={classnames("input-text required-entry  "  )}
                         />
                       </div>
                 </li>
                    <li>
                       <label> Tel   </label>
                        <div className="input-box">
                            <input type="text" name="tel" value={this.state.tel}
                            onChange={ this.handleInputChange } 
                            className={classnames("input-text required-entry validate-email",{"is-invalid": errors.tel} )}id="tel" title="Tel"/>
                            {errors.tel && (<div style= {{color: "red"}}>{errors.tel } </div>)}
                        </div>
                    </li>
                    <li>
                       <label> Country </label>
                        <div className="input-box">
                            <input type="text" name="country" value={this.state.country}
                            onChange={ this.handleInputChange } 
                            className={classnames("input-text required-entry validate-email",{"is-invalid": errors.tel} )}id="country" title="Country"/>
                            {errors.country && (<div style= {{color: "red"}}>{errors.country } </div>)}
                        </div>
                    </li>
                   
                </ul>
                <div className="buttons-set">
                <button type="button" title="Create an Account" className="button create-account" type="submit" ><span>Create an Account</span></button>
            </div>
              </div>  
              </form>                              
            </div> 


        )
    }
}

Subscribe.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect (mapStateToProps, {registerUser}) (Subscribe) ; 
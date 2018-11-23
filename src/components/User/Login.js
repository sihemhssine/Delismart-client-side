import React from "react"; 
import classnames from "classnames";
import { loginUser } from  "../../actions/Auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            email: "",
            password:  "",
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
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
        console.log("user", this.props.auth)
    }
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.data.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.data.push("/")
        }
        if(nextProps.errors) {
            console.log("rr", nextProps.errors )
            this.setState({
                errors: nextProps.errors
            });
        }
    }
  
    render(){
         const {errors} = this.state;
        return(
            <div className="col-2 registered-users">
         <strong>Registered Customers</strong>             
            <div className="content">
            <form onSubmit={ this.handleSubmit }>

               <p>If you have an account with us, please log in.</p>
                <ul className="form-list">
                    <li>
                         <label >Email Address<em className="required">*</em></label>
                        <div className="input-box">
                            <input type="email"  name="email" value={this.state.email} id="email"
                            onChange={this.handleInputChange}
                             className={classnames("input-text required-entry validate-email", {"is-invalid": errors.email})}
                              title="Email Address"/>
                             {errors.email  && (<div  style={{color: "red"}}>{errors.email  }</div>)}

                        </div>
                    </li>
                    <li>
                     <label  >Password<em className="required">*</em></label>
                        <div className="input-box">
                            <input type="password" name="password" value={this.state.password}
                            onChange={this.handleInputChange}                            
                            className="input-text required-entry validate-password" id="pass" title="Password"/>
                            {errors.password && (<div style={{ color:"red"}}>{errors.password}</div>)}

                        </div>
                    </li>
                </ul>
        
            <div className="buttons-set">
             <button type="submit" className="button login" title="Login" name="send" id="send2"><span>Login</span></button>
                 <a href="#" className="forgot-word">Forgot Your Password?</a>
             </div> 
             </form>  
              </div>  
                                        
            </div> 
            
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(withRouter(Login)); 
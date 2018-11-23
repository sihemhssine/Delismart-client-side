import React from  "react"; 
import { connect } from "react-redux";
import { Link  } from "react-router-dom";
import {findProdByCat} from "../../actions/Product"; 
import { logoutUser } from "../../actions/Auth"; 
import PropTypes from "prop-types";

class Header  extends React.Component {
  constructor(props) {
    super(props);   
    this.state= {
      authUsr : this.props.auth.isAuthenticated 
     }
      
  } 
 componentDidUpdate(){
  }
 componentWillMount(){
 }
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
render() {  
  const {isAuthenticated, user} = this.props.auth;
 return(
  <div className= "header"> 
   <div className="container">
      <div className="row">
        <div className="container">
      
    </div>
      </div>
    </div>
    <div id="header">  
   <div className= "container">
  <div className="header-container row">
     <div className="logo"> <a >
           <div>
           <Link  to={{ pathname: "/app/dashboard/default" }} > <h1> Delismart</h1> </Link> </div>
           </a> </div>
     <div className="fl-nav-menu">
         <nav>
           <div className="mm-toggle-wrap">
             <div className="mm-toggle"><i className="icon-align-justify"></i><span className="mm-label">Menu</span> </div>
           </div>  
           <div className="nav-inner">
             <ul id="nav" className="hidden-xs">                     
              <li className="active">   <Link  to={{ pathname: "/"}}> <span>Home</span> </Link>  </li>
               {this.props.categories.map(category => {
                return (    
                <li  key= {category.name} className="level0 parent drop-menu" onClick = {()=> {this.props.onFilter(category.name) ; }}>  
                <Link  to={{ pathname: `/app/product/productgrid/${category.name}`, state : {products:this.props.products, categoryName: category.name }}}>
                 <span> {category.name} </span> </Link>   
                  {category.subCategory.length !== 0 && 
                  <ul className="level1">
                 {category.subCategory.map( ( subCat)=>{
                    return(
                    <li className="level1 "><a href="grid.html"><span> {subCat} </span></a></li> 
                    ) 
                   })} 
                  </ul>}
                </li>
             )})}
             </ul>
             </div>
          </nav>
       </div>
     <div className="fl-header-right">
       <div className="fl-links">
         <div className="no-js"> <a title="Company" className="clicker"></a>
           <div className="fl-nav-links">
             <div className="language-currency">
               <div className="fl-language">
                 <ul className="lang">
                   <li><a href="grid.html"> <img    src="/images/english.png" alt="English"/> <span>English</span> </a></li>
                   <li><a href="grid.html"> <img    src="/images/francais.png" alt="French"/> <span>French</span> </a></li>
                   <li><a href="grid.html"> <img    src="/images/german.png" alt="German"/> <span>German</span> </a></li>
                 </ul>
               </div>
               <div className="fl-currency">
                 <ul className="currencies_list">
                   <li><a href="grid.html" title="EGP"> £</a></li>
                   <li><a href="grid.html" title="EUR"> €</a></li>
                   <li><a href="grid.html" title="USD"> $</a></li>
                 </ul>
               </div>
             </div>
             <ul className="links">
              {this.state.authUsr &&  <li> <Link to= {{pathname : "/app/user/useraccount"}}> My Account </Link></li> }
              {this.state.authUsr && <li> <Link to= {{pathname : "/app/user/wishlist"}}> Wishlist </Link> </li> } 
              {this.state.authUsr && <li><a href="checkout.html" title="Checkout">Checkout</a></li> } 
               <li><a href="blog.html" title="Blog"><span>Blog</span></a></li>
               {this.state.authUsr
               ? <li onClick ={this.onLogout.bind(this)}><a>LogOut</a></li>  
               :<li className="last"><Link to= {{pathname : "/app/user/loginpage"}}>  <span>Login/ Register</span> </Link> </li>
               }
             </ul>
           </div>
         </div>
       </div>
       <div className="fl-cart-contain">
         <div className="mini-cart">
         {isAuthenticated  
          ? <Link to ={{ pathname: "/app/user/shoppingcart", state:{ shoppingcard : user.shoppingcard}}}> 
         <div className="basket"> 
           <a ><span> {user.shoppingcard.length} </span></a>
            </div>
          </Link>
          : null 
        }  
         </div>
       </div>
       <div className="collapse navbar-collapse">
             <form className="navbar-form" role="search">
               <div className="input-group">
                 <input type="text" className="form-control" placeholder="Search"/>
                 <span className="input-group-btn">
                 <button type="submit" className="search-btn"> <span className="glyphicon glyphicon-search"> <span className="sr-only">Search</span> </span> </button>
                 </span> 
                </div>
             </form>
           </div>
     </div>
   </div>
 </div>  
 </div>  
 </div> 
 )}
}

const mapStateToProps = state => {
  return {
    categories: state.categories , 
    products: state.products, 
    auth: state.auth 
   };
};
const mapDispatchToProps = dispatch => {
  return {
      onFilter: category => {
          dispatch(findProdByCat(category));
      }, 
      logoutUser:  history=>{
        dispatch(logoutUser(history))
      },
   }
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


export default connect(mapStateToProps,mapDispatchToProps  )(Header) ;
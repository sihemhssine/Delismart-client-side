import React from "react"; 
import { connect } from "react-redux";
import {findProdByCat} from "../../../../../actions/Product"; 
import ProductTable from "../../../../../components/Product/ProductTable"; 
import { Link  } from "react-router-dom";

class ProductGrid extends  React.Component{ 
    constructor(props) {
        super(props); 
     this.state= {
      products: this.props.location.state.products, 
     }
    }
     render(){
     return(
   <div> 
     <section className="main-container col2-left-layout bounceInUp animated"> 
    <div className="container">
      <div className="row">
        <div className="col-main col-sm-9 col-sm-push-3 product-grid">
        <div className="pro-coloumn">
        <ProductTable  products = {this.props.products}/> 
          </div>
            
        </div>
        <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated"> 
           
          <div className="side-nav-categories">
            <div className="block-title"> Categories </div>
           
            <div className="box-content box-category">
              <ul>
               {this.props.categories.map ( category=>{
                 return(
                  <li onClick = {()=> {this.props.onFilter(category.name) ; }} > <Link  to={{ pathname: `/app/product/productgrid/${category.name}`, state : {products:this.props.products, categoryName: category.name }}}> {category.name} </Link>      
                </li>
                 )
               })} 
               </ul>
            </div>
              
          </div>
          <div className="block block-layered-nav">
            <div className="block-title"> Shop By </div>
            <div className="block-content">
                <p className="block-subtitle">Shopping Options</p>
                <dl id="narrow-by-list">
                  <dt className="odd">Price</dt>
                  <dd className="odd">
                    <ol>
                      <li> <a   href="grid.html"><span className="price">$0.00</span> - <span className="price">$99.99</span></a> (6) </li>
                      <li> <a   href="grid.html"><span className="price">$100.00</span> and above</a> (6) </li>
                    </ol>
                  </dd>
                  <dt className="even">Manufacturer</dt>
                  <dd className="even">
                    <ol>
                      <li> <a   href="grid.html">TheBrand</a> (9) </li>
                      <li> <a   href="grid.html">Company</a> (4) </li>
                      <li> <a   href="grid.html">LogoFashion</a> (1) </li>
                    </ol>
                  </dd>
                  <dt className="odd">Color</dt>
                  <dd className="odd">
                    <ol>
                      <li> Green(1) </li>
                      <li> <a   href="grid.html">White</a> (5) </li>
                      <li> <a   href="grid.html">Black</a> (5) </li>
                      <li> <a   href="grid.html">Gray</a> (4) </li>
                      <li> <a   href="grid.html">Dark Gray</a> (3) </li>
                  </ol>
                  </dd>
                  <dt className="last even">Size</dt>
                  <dd className="last even">
                    <ol>
                      <li> <a   href="grid.html">Small</a> (6) </li>
                      <li> <a   href="grid.html">Medium</a> (6) </li>
                      <li> <a   href="grid.html">Large</a> (4) </li>
                    </ol>
                  </dd>
                </dl>
              </div>
          </div>
      {this.props.auth.isAuthenticated 
       ? <div className="block block-list block-cart">
            <div className="block-title"> My Cart </div>
            <div className="block-content">
              <div className="summary">
              
               <p className="amount">There is <a   href="grid.html"> {this.props.auth.user.shoppingcard.length } items</a> in your cart.</p>
             
                
                <p className="subtotal"> <span className="label">Cart Subtotal:</span> <span className="price">$299.00</span> </p>
              </div>
              <div className="ajax-checkout">
                <button type="button" title="Checkout" className="button button-checkout" > <span>Checkout</span> </button>
              </div>
              <p className="block-subtitle">Recently added item(s)</p>
              <ul id="cart-sidebar1" className="mini-products-list">
                <li className="item">
                  <div className="item-inner"> <a   href="grid.html" className="product-image"><img src= "/images/products-images/p1.jpg" width="80" alt="product"/></a>
                    <div className="product-details">
                      <div className="access"> <a   href="grid.html" className="btn-remove1">Remove</a> 
                      <a href="" title="Edit item" className="btn-edit">
                      <i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                       <strong>1</strong> x <span className="price">$299.00</span>
                      <p className="product-name"><a   href="grid.html">Fresh Organic Mustard Leaves </a></p>
                    </div>
                    </div>
                </li>
                <li className="item  last1">
                  <div className="item-inner"> <a   href="grid.html" className="product-image"><img src= "/images/products-images/p2.jpg" width="80" alt="product"/></a>
                    <div className="product-details">
                      <div className="access"> <a   href="grid.html" className="btn-remove1">Remove</a> 
                      <a href="" title="Edit item" className="btn-edit">
                      <i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                      <strong>1</strong> x <span className="price">$299.00</span>
                      <p className="product-name"><a   href="grid.html">Fresh Organic Mustard Leaves </a></p>
                    </div>
                   </div>
                </li>
              </ul>
            </div>
          </div>
          : null 
          }
       </aside>
      </div>  
    </div>
  </section>
  </div>
)
}
}

const mapStateToProps = state => {
    return {
      products: state.products, 
      categories: state.categories, 
      auth: state.auth  
     }; 
  };
const mapDispatchToProps = dispatch => {
    return {
        onFilter: category => {
            dispatch(findProdByCat(category));
        }
    }
  };  
export default connect( mapStateToProps, mapDispatchToProps)(ProductGrid) ;


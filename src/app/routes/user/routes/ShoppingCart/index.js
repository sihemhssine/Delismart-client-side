import React from "react"; 
import { connect } from "react-redux";
import {findProdById} from "../../../../../actions/Product"; 
import ShoppingTable from "./ShoppingTable"; 
import { Link  } from "react-router-dom";

class ShoppingCart extends React.Component{
constructor(props){
    super(props); 
    this.state ={
        products: props.location.state.shoppingcard
    }    
 }

render(){
    return(
  <div>   
  <div className="page-heading">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
      <div className="page-title">
      <h2>Shopping Cart</h2>
        </div>
      </div>
    </div>
  </div>
</div>
 <div className="main-container col1-layout wow bounceInUp animated">     
 <div className="main">                     
  <div className="cart wow bounceInUp animated">
    <div className="table-responsive shopping-cart-tbl  container">
  <form action="" method="post">
      <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
      <fieldset>
          <table id="shopping-cart-table" className="data-table cart-table table-striped">
              <colgroup><col width="1"/>
              <col/>
              <col width="1"/>
                  <col width="1"/>
                  <col width="1"/>
                  <col width="1"/>
                    <col width="1"/>
                   </colgroup><thead>
                  <tr className="first last">
                      <th rowspan="1">&nbsp;</th>
                      <th rowspan="1"><span className="nobr">Product Name</span></th>
                      <th rowspan="1"></th>
                      <th className="a-center" colspan="1"><span className="nobr">Unit Price</span></th>
                      <th rowspan="1" className="a-center">Qty</th>
                      <th className="a-center" colspan="1">Subtotal</th>
                      <th rowspan="1" className="a-center">&nbsp;</th>
                  </tr>
               </thead>
              <tfoot>
                  <tr className="first last">
                      <td colspan="50" className="a-right last">
                   <Link  to={{ pathname: "/"}}> <button type="button" title="Continue Shopping" className="button btn-continue" onClick=""><span><span>Continue Shopping</span></span></button> </Link>  

                            
                            <button type="submit" name="update_cart_action" value="update_qty" title="Update Cart" className="button btn-update"><span><span>Update Cart</span></span></button>
                          <button type="submit" name="update_cart_action" value="empty_cart" title="Clear Cart" className="button btn-empty" id="empty_cart_button"><span><span>Clear Cart</span></span></button>
                  </td>
                  </tr>
              </tfoot>
              <tbody>
 
    {this.props.auth.user.shoppingcard.map ((product  )=>{
         return(
       <ShoppingTable product = {product } />
        )
   })}

</tbody>
 </table>
  </fieldset>
  </form>
</div>
<div className="cart-collaterals container"> 
<div className="row">
<div className="col-sm-4">
<div className="shipping">

      <h3>Estimate Shipping and Tax</h3>
      <div className="shipping-form">
     <form action="" method="post" id="shipping-zip-form">
          <p>Enter your destination to get a shipping estimate.</p>
          <ul className="form-list">
              <li>
                  <label for="country" className="required"><em>*</em>Country</label>
                  <div className="input-box">
                     <select name="country_id" id="country" className="validate-select" title="Country">  
                      <option> Tunis </option>
                      </select>
                    </div>
              </li>
                          <li>
                  <label for="region_id">State/Province</label>
                  <div className="input-box">
                      <select id="region_id" name="region_id" title="State/Province" defaultvalue="" className="required-entry validate-select">
                          <option value="">Please select region, state or province</option>
                          <option value="1" title="Alabama">Alabama</option> 
                      </select>
                     <input type="text" id="region" name="region" value="" title="State/Province" className="input-text required-entry" style={{display: "none"}}/>
                 </div>
              </li>
                 <li>
                  <label for="postcode">Zip/Postal Code</label>
                  <div className="input-box">
                      <input className="input-text validate-postcode" type="text" id="postcode" name="estimate_postcode" value=""/>
                  </div>
              </li>
          </ul>
         <div className="buttons-set11">
            <button type="button" title="Get a Quote" onClick="coShippingMethodForm.submit()" className="button get-quote"><span>Get a Quote</span></button>
          </div>  
      </form>
  </div>
</div>
</div>   
<div className="col-sm-4">    
<div className="discount">
    <h3>Discount Codes</h3>
<form id="discount-coupon-form" action="" method="post">                       
          <label for="coupon_code">Enter your coupon code if you have one.</label>
          <input type="hidden" name="remove" id="remove-coupone" value="0"/>                        
              <input className="input-text fullwidth" type="text" id="coupon_code" name="coupon_code" value=""/>                                                    
                <button type="button" title="Apply Coupon" className="button coupon " onClick="discountForm.submit(false)" value="Apply Coupon"><span>Apply Coupon</span></button>                
                             
</form>

</div>  
</div>  

<div className="col-sm-4">
<div className="totals">
<h3>Shopping Cart Total</h3>
<div className="inner">

  <table id="shopping-cart-totals-table" className="table shopping-cart-table-total">
      <colgroup><col/>
      <col width="1"/>
      </colgroup><tfoot>
          <tr>
  <td  className="a-left" colspan="1">
      <strong>Grand Total</strong>
  </td>
  <td   className="a-right">
      <strong><span className="price">$129.00</span></strong>
  </td>
</tr>
      </tfoot>
      <tbody>
          <tr>
  <td  className="a-left" colspan="1">
      Subtotal    </td>
  <td   className="a-right">
      <span className="price">$129.00</span>    </td>
</tr>
      </tbody>
  </table>

<ul className="checkout">           
<li>
  <button type="button" title="Proceed to Checkout" className="button btn-proceed-checkout" onClick=""><span>Proceed to Checkout</span></button>
</li><br/>
<li><a href="multiple-addresses.html" title="Checkout with Multiple Addresses">Checkout with Multiple Addresses</a>
</li><br/>
</ul>                
</div> 
</div> 
</div>  
</div>  
</div>
</div>   
</div> 
</div>  
</div>        
 )
}
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
        onFindById:  id => {
            dispatch(findProdById(id ));
        }
    }
  }; 
export default  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)  ; 
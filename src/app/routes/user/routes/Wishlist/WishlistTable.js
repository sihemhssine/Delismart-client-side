import React from "react"; 
import { connect } from "react-redux";
import { Link  } from "react-router-dom";
import {findProdById} from "../../../../../actions/Product"; 
class WhishlistTable   extends React.Component{
 constructor(props){
   super(props);  
    this.state={
     prod :  {}  ,
     prodId: this.props.product, 
     quantity: "1" 
  }
  this.handleInputChange = this.handleInputChange.bind(this);
}
   componentDidMount(){
this.props.onFindById(this.props.product); 
 }
   handleInputChange(e) {
     this.setState ({
       quantity: e.target.value 
     })
   }

render(){  
    return (
        <div> 
       <tr id="item_32" className="first odd">
      <td>  <div className="description std">
            <div className="inner">
            <tr id="item_32" className="first odd">
            <td className="wishlist-cell0 customer-wishlist-item-image"><a className="product-image" href="product-detail.html" title="Slim Fit Casual Shirt"> <img src={this.props.prodid.img} width="80" height="80" alt="Slim Fit Casual Shirt"/> </a></td>
            <td className="wishlist-cell1 customer-wishlist-item-info"><h3 className="product-name"><a href="product-detail.html" title="Slim Fit Casual Shirt">{this.props.prodid.label}</a></h3> </td>
              <div className="description std">
                <div className="inner"> {this.props.prodid.description}</div>
              </div>
             <td className="wishlist-cell2 customer-wishlist-item-quantity" data-rwd-label="Quantity"><div className="cart-cell">
                <div className="add-to-cart-alt">
                  <input type="text"  className="input-text qty validate-not-negative-number" name="quantity" value= {this.state.quantity} onChange= {this.handleInputChange} />
                </div>
              </div></td>
            <td className="wishlist-cell3 customer-wishlist-item-price" data-rwd-label="Price"><div className="cart-cell">
                
            { this.props.reduction === 0 
            ? <div className="price-box"> <span className="regular-price" id="product-price-2"> <span className="price"> {this.state.quantity* this.props.prodid.pricettc }</span> </span> </div>
            : <div className="price-box"> <span className="regular-price" id="product-price-2"> <span className="price"> {this.state.quantity*(this.props.prodid.pricettc - (this.props.prodid.pricettc* this.props.prodid.reduction /100) )  }</span> </span> </div>
            }
              </div></td>
            <td className="wishlist-cell4 customer-wishlist-item-cart"><div className="cart-cell">
                <button type="button" title="Add to Cart" onClick="addWItemToCart(32);" className="button btn-cart"><span><span>Add to Cart</span></span></button>
              </div>
              <div className="edit-wishlist"> <a href="#" title="Edit item" className="btn-edit"><i className="icon-pencil"></i><span className="hidden">Edit</span></a> </div></td>
            <td className="wishlist-cell5 customer-wishlist-item-remove last"><a href="#" onClick="return confirmRemoveWishlistItem();" title="Clear Cart" className="remove-item"><span><span></span></span></a></td>
          </tr>
          
          </div>
      </div>
           </td>
 </tr>
      </div> 
    )
}
} 

const mapDispatchToProps = dispatch => {
  return {
      onFindById:  id => {
          dispatch(findProdById(id ));
      }
  }
};  
const mapStateToProps = state => {
  return {
     auth: state.auth , 
    prodid: state.prodid 
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps) (WhishlistTable)  ; 
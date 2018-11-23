import React from "react"; 
import { connect } from "react-redux";
import {findProdById} from "../../../../../actions/Product"; 


class ShoppingTable extends React.Component{
    constructor(props){
        super(props); 
        this.state= {
            quantity: 1 
        }
  this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(e) {
        this.setState ({
          quantity: e.target.value 
        })
      }
    componentDidMount(){
        this.props.onFindById(this.props.product); 
         }
render(){
 
return (
<tr className="odd">
  <td className="image hidden-table"><a href="product-detail.html" title="Women&#39;s Georgette Animal Print" className="product-image"><img src= {this.props.prodid.img} width="75" alt="Women&#39;s Georgette Animal Print"/></a></td>
  <td>
      <h2 className="product-name">
                  <a href="product-detail.html">{this.props.prodid.label}</a>
              </h2>
      </td>
  <td className="a-center hidden-table">
              <a href="#" className="edit-bnt" title="Edit item parameters"></a>
          </td>
     <td className="a-right hidden-table">
               <span className="cart-price">
               <span className="price">$129.00</span>  
               { this.props.reduction === 0 
                ?    <span className="price"> {this.state.quantity* this.props.prodid.pricettc }</span>  
                :   <span className="price"> {this.state.quantity*(this.props.prodid.pricettc - (this.props.prodid.pricettc* this.props.prodid.reduction /100) )  }</span>  
                }

          </span> 
           </td>
        <td className="a-center movewishlist"> 
      <input type="text"  className="input-text qty validate-not-negative-number" name="quantity" value= {this.state.quantity} onChange= {this.handleInputChange} />

      </td>
      <td className="a-right movewishlist">
                  <span className="cart-price">
                  <span className="price">$129.00</span>                            
     </span>
          </td>
          <td className="a-center last">

 <a href="#" title="Remove item" className="button remove-item"><span><span>Remove item</span></span></a></td>
</tr> 
 
        )
    }
}

const mapStateToProps = state => {
    return { 
      products: state.products, 
      auth: state.auth ,
    prodid: state.prodid 

     };
  };
  const mapDispatchToProps = dispatch => {
    return {
        onFindById:  id => {
            dispatch(findProdById(id ));
        }
    }
  }; 
export default  connect(mapStateToProps, mapDispatchToProps)(ShoppingTable)  ; 

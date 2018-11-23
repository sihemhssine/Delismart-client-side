import React from "react"; 
import { Link  } from "react-router-dom";
import { connect } from "react-redux";
import {updateShoppingList} from "../../actions/Auth"; 
import {updateWishList} from "../../actions/Auth"; 

class ProductTable extends React.Component {
    constructor(props){
        super(props);  
        this.state= { 
          nbrPages: Math.round(this.props.products.length / 15) , 
          products : this.props.products 
          }
    }
    sortByPrice(){ 
       this.props.products.sort(function (prod1, prod2 ) { 
        if (prod1.pricettc < prod2.pricettc) return -1;
        if (prod1.pricettc > prod2.pricettc) return 1;
        return 0; 
        }) ; 
         this.setState({
          products: this.props.products 
        })
    }
    sortByLabel(){ 
      this.props.products.sort(function (prod1, prod2 ) { 
       if (prod1.label.toUpperCase()  < prod2.label.toUpperCase() ) return -1;
       if (prod1.label.toUpperCase()  > prod2.label.toUpperCase() ) return 1;
       return 0; 
       }) ; 
        this.setState({
         products: this.props.products 
       })
   }

 render(){
 return (
 <article>
 <div className="toolbar">
  <div className="sorter">
    <div className="view-mode"> <span title="Grid" className="button button-active button-grid">&nbsp;</span><a href="list.html" title="List" className="button-list">&nbsp;</a> </div>
  </div>
  <div className="sort-by">
    <label className="left">Sort By: </label>
    <ul>
      <li><a   href="grid.html"> Creteria <span className="right-arrow"></span></a>
        <ul>
          <li onClick={()=>{this.sortByLabel()}}> Name  </li>
          <li onClick={()=>{this.sortByPrice()}}> Price </li>
        </ul>
      </li>
    </ul>
    <a className="button-asc left"   href="grid.html" title="Set Descending Direction"><span className="top_arrow"></span></a> </div>
  <div className="pager">
    <div className="limiter">
      <label>View: </label>
      <ul>
        <li><a   href="grid.html">15<span className="right-arrow"></span></a>
          <ul>
            <li><a   href="grid.html">20</a></li>
            <li><a   href="grid.html">30</a></li>
            <li><a   href="grid.html">35</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="pages">
      <label>Page:</label>
      <ul className="pagination">
        
                  <li><a  >&laquo;</a></li>
                  <li className="active"><a >1</a></li>
                  <li><a>2</a></li>
                  <li><a>3</a></li>
                  <li><a>4</a></li>
                  <li><a>5</a></li>
                  <li><a>&raquo;</a></li>
      </ul>
    </div>
  </div>
</div>
{/* <product grid>  */}
<div className="category-products">
  <ul className="products-grid">
  {this.props.products.length === 0 && 
    <div> &nbsp; &nbsp;  No match product !  </div> 
    } 
  {this.props.products.map ( product => 
  {
  return (
    <li className="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                         <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><a href="product-detail.html" title="Fresh Organic Mustard Leaves " className="product-image">
                      <img  src= {product.img}    alt= {product.label } /></a>
                      <div className="item-box-hover">
                          <div className="box-inner">
                            <div className="product-detail-bnt">
                            <Link  to={{ pathname: `/app/product/productdetails/${product._id}`, state : {product:product }}}>
                            <a className="button detail-bnt"><span>Quick View</span> </a> </Link></div>
                            <div className="actions">
                            <span className="add-to-links">
                            {this.props.auth.isAuthenticated && <a   onClick= {()=>{ this.props.onAddWishlist(this.props.auth.user.id , product._id )}}  className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a>} 
                             <a href="grid.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                         </div>
                        </div>
                      </div>
                      <div className="add_cart">
                              <button className="button btn-cart" type="button" onClick= {()=>{ this.props.onUpdate(this.props.auth.user.id , product._id )}}><span>Add to Cart</span></button>
                            </div>
                  </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"><a href="product-detail.html" title="Fresh Organic Mustard Leaves ">{product.label}</a> </div>
                        <div className="item-content">
                          <div className="rating">
                            <div className="ratings">
                              <div className="rating-box">
                              <div className="rating" style={{width:"80%"}}></div>
                              </div>
                              <p className="rating-links"><a   href="grid.html">1 Review(s)</a> <span className="separator">|</span> <a   href="grid.html">Add Review</a> </p>
                            </div>
                          </div>
                          <div className="item-price">
                          { product.reduction !== 0
                             ?  
                            <div className="price-box"><span className="regular-price"><span className="price"><span style={{ color :"grey"}}> <del> ${product.pricettc} </del></span>   { product.pricettc - ( product.pricettc *  product.reduction )/100}$</span> </span> </div>
                           : <div className="price-box"><span className="regular-price"><span className="price">{product.pricettc}$</span> </span> </div>
                           }   
                          </div>
                         </div>
                      </div>
                    </div>
                  </div>
            
    </li>
 )})
}  
</ul>
</div> 
</article>

)}
}

const mapDispatchToProps = dispatch => {
  return {
      onUpdate:  (idUsr,idProd)  => {
          dispatch( updateShoppingList( idUsr,idProd ));
      }, 
      onAddWishlist: (idUsr,idProd)=>{
        dispatch( updateWishList(idUsr,idProd))
      }
  }
};  


const mapStateToProps = state => {
  return { 
    auth: state.auth 
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductTable); 

import  React from "react";
import { connect } from "react-redux";
import {findProdById} from "../../../../../actions/Product"; 
import {deleteWishlist} from  "../../../../../actions/Auth"; 
import WishlistTable from "./WishlistTable"; 
class Whishlist  extends React.Component{
    constructor(props){
        super(props); 
     
 }

    render(){
  return (
    <div id="page">
    <section  className="main-container col2-right-layout">
    <div  className="main container">
      <div  className="row">
        <section  className="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div  className="my-account">
          {this.props.auth.user.wishlist.length  === 0 
          ? <p> No item in your wishlist. </p>
          : 
         
            <div  className="my-wishlist">
              <form id="wishlist-view-form" action="" method="post">
                <fieldset>
                  <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
                  <div  className="table-responsive">
                  <table  className="clean-table linearize-table data-table table-striped" id="wishlist-table">
                    
                    <tbody>
                    {this.props.auth.user.wishlist !== 0 
                    ? this.props.auth.user.wishlist.map( product => {
                         return(
                       <WishlistTable product= {product}/>
                      ) })
                      : {}
                      }
                  </tbody>
                  </table>
                  </div>
                  <div  className="buttons-set buttons-set2">
                    <button  onClick= {()=>{this.props.onDelete(this.props.auth.user.id)}}  type= "button" title="Delete Wishlist"  className="button btn-delete"><span>Delete Wishlist</span></button>
                </div>
                </fieldset>
              </form>
              <form id="wishlist-allcart-form" action="" method="post">
                <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
                <div  className="no-display">
                  <input type="hidden" name="wishlist_id" id="wishlist_id" value="1"/>
                  <input type="hidden" name="qty" id="qty" value="" />
                </div>
              </form>
             </div>
          }
            </div>
        </section>
         <aside  className="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div  className="block block-account">
            <div  className="block-title"> My Account </div>
            <div  className="block-content">
              <ul>
                <li><a href="#"><span> Account Dashboard</span></a></li>
                <li><a href="#"><span> Account Information</span></a></li>
                <li><a href="#"><span> Address Book</span></a></li>
                <li><a href="#"><span> My Orders</span></a></li>
                <li><a href="#"><span> Billing Agreements</span></a></li>
                <li><a href="#"><span> Recurring Profiles</span></a></li>
                <li><a href="#"><span> My Product Reviews</span></a></li>
                <li  className="current"><a>My Wishlist</a></li>
                <li><a href="#"><span> My Applications</span></a></li>
                <li><a href="#"><span> Newsletter Subscriptions</span></a></li>
                <li  className="last"><a href="#"><span> My Downloadable Products</span></a></li>
              </ul>
            </div>
           </div>
           <div  className="custom-slider">
          <div>
            <div id="carousel-example-generic"  className="carousel slide" data-ride="carousel">
              <ol  className="carousel-indicators">
                <li  className="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"  className=""></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"  className=""></li>
              </ol>
              <div  className="carousel-inner">
                <div  className="item active"><img src="/images/slide2.jpg" alt="slide3" />
                  <div  className="carousel-caption">
                  <h4>Fruit Shop</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Up to 70% Off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a  className="link" href="#">Buy Now</a></div>
                </div>
                <div  className="item"><img src="/images/slide3.jpg" alt="slide1" />
                  <div  className="carousel-caption">
                   <h4>Black Grapes</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Mega Sale</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <a  className="link" href="#">Buy Now</a>
                  </div>
                </div>
                <div  className="item"><img src="/images/slide1.jpg" alt="slide2"/>
                  <div  className="carousel-caption">
                  <h4>Food Farm</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Up to 50% Off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <a  className="link" href="#">Buy Now</a>
                  </div>
                </div>
              </div>
              <a  className="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span  className="sr-only">Previous</span> </a> <a  className="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span  className="sr-only">Next</span> </a></div>
          </div>
        </div>
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
    auth: state.auth 
   };
}; 


const mapDispatchToProps = dispatch => {
  return {
   
      onDelete:  id => {
        dispatch(deleteWishlist(id));
    }
  }
};  

export default connect(mapStateToProps, mapDispatchToProps)(Whishlist) ; 
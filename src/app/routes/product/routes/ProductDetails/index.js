import React from "react"; 
import moment from "moment"; 
import {LinkedInShareButton, TwitterShareButton,GooglePlusShareButton, FacebookShareButton} from "react-simple-share";
import ImageZoom from 'react-medium-image-zoom'

class ProductDetails extends React.Component{
constructor(props){
  super(props); 
var now = moment(new Date()) ; //today's date
var proddate = moment(this.props.location.state.product.proddate).format("LL"); // production  date
var duration = moment.duration(now.diff(proddate));
var days = duration.asDays();
if (days <20) { 
  let newProduct = true  
}
  console.log(" difference date ", this.props ); 
  this.state= {
    product : this.props.location.state.product, 
    qtyCart :  0, 
    proddate: moment(this.props.location.state.product.proddate).format('LL'),
    expdate: moment(this.props.location.state.product.expdate).format('LL') ,
    newText: days < 20  
  }
 }  
handleInputChange = (e) => { 
this.setState({
  qtyCart: e.target.value
}) 
}
render(){
    return( 
          
        <div  className="main-container col1-layout wow bounceInUp animated">
          <div  className="main">
            <div  className="col-main">
              <div  className="product-view wow bounceInUp animated" itemScope="" itemType="http://schema.org/Product" itemId="#product_base">
                <div id="messages_product_view"></div>
                 <div  className="product-essential container">
                  <div  className="row">
                    <form action="#" method="post" id="product_addtocart_form">
                      <div  className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                         <div  className="new-label new-top-left">{this.state.newText === true ? <p> NEW!</p> :  null  }</div>
                          {this.state.product.reduction !== 0 && <div  className="sale-label sale-top-left">-{this.state.product.reduction} %</div>}
                          <div  className="product-image">
                             <ImageZoom
                              image={{
                                src:  this.state.product.img,
                                alt: 'Golden Gate Bridge',
                                className: 'product-full',
                               }}
                              zoomImage={{
                                src:  this.state.product.img,
                                alt: 'Golden Gate Bridge'
                              }}  /> 
                   </div>
                          </div>                            
                      
                      <div  className="product-shop col-lg- col-sm-7 col-xs-12">
                          <div  className="brand"> {this.state.product.category}</div>
                          <div  className="product-name">
                            <h1> {this.state.product.label}</h1>
                          </div>
                          <div  className="ratings">
                            <div  className="rating-box">
                              <div style={{width:"60%"}}  className="rating"></div>
                            </div>
                            <p  className="rating-links"> <a href="#">1 Review</a> <span  className="separator">|</span> <a href="#">Add Your Review</a> </p>
                          </div>
                          <div  className="price-block">
                            <div  className="price-box">
                            <p  className="availability in-stock"><span> {this.state.product.quantity} In Stock</span></p>
                            { this.state.product.reduction !== 0
                             ? <p className="special-price"> <span id="product-price-48"  className="price" style= {{color: "#909090"}}> <del> ${this.state.product.pricettc}</del>  </span> 
                            <span id="product-price-48"  className="price"> $ {this.state.product.pricettc - (this.state.product.pricettc * this.state.product.reduction )/100}</span>
                            </p>
                            : <p className="special-price"> <span id="product-price-48"  className="price">   ${this.state.product.pricettc}</span> </p>
                             }
                            </div>
                          </div>
                          <div  className="add-to-box">
                            <div  className="add-to-cart">
                              <div  className="pull-left">
                                <div  className="custom pull-left">
                                   <input style= {{border : "none"}} placeholder = "Quantity to buy" type="number" onChange={this.handleInputChange}  name="qty" max = {this.state.product.quantity} />
                              </div>
                              </div>
                              <button disabled={this.state.qtyCart === 0 }  className="button btn-cart" title="Add to Cart" type="button">Add to Cart</button>
                            </div>
                         </div>
                          <div  className="short-description">
                            <p> {this.state.product.description} </p>
                          </div>
                          <div  className="email-addto-box">
                              <ul  className="add-to-links">
                                <li> <a  className="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                                <li><span  className="separator">|</span> <a  className="link-compare" href="compare.html"><span>Add to Compare</span></a></li>
                              </ul>
                              <p  className="email-friend"><a href="#"  className=""><span>Email to a Friend</span></a></p>
                            </div>
                          <div  className="social">
                            <ul  className="link">
                              <li>  
                               <FacebookShareButton 
                                        url="http://themesground.com/qmart-demo/V1/#"
                                        color="#3B5998"
                                        size="40px"
                               /> </li>
                              <li> 
                              <TwitterShareButton
                                    url="http://themesground.com/qmart-demo/V1/#"
                                    color="#1DA1F2"
                                    size="40px"
                                    text="New product from DELISMART"
                                    hashtags="delismart,ecommerce,product"
                                    via="delismart"
                                   />
                              </li>
                              <li>
                              <LinkedInShareButton
                                    url="https://github.com/swozniak/react-simple-share/"
                                    color="#007BB5"
                                    size="40px"
                                    title="React Simple Share"
                                    summary="A free react component by @stephanwozniak, made for easily sharing links on social media sites!"
                                  />
                              </li>
                              <li>
                              <GooglePlusShareButton
                                    url="https://github.com/swozniak/react-simple-share/"
                                    color="#DB4437"
                                    size="40px"
                                  />
                              </li>
                             </ul>
                          </div>
                          
                          <ul  className="shipping-pro">
                                          <li>Free Wordwide Shipping</li>
                                          <li>30 Days Return</li>
                                          <li>Member Discount</li>
                                      </ul>
                        </div>
                       
                       
                    </form>
                  </div>
                </div>
           <div  className="product-collateral container">
                  <ul id="product-detail-tab"  className="nav nav-tabs product-tabs">
                    <li  className="active"> <a href="#product_tabs_description" data-toggle="tab"> Product Description </a> </li>
                    <li><a href="#product_tabs_details" data-toggle="tab">Full details </a></li>
                    <li> <a href="#reviews_tabs" data-toggle="tab">Reviews</a> </li>
                    <li> <a href="#product_tabs_custom" data-toggle="tab">Custom Tab</a> </li>
                    <li> <a href="#product_tabs_custom1" data-toggle="tab">Custom Tab1</a> </li>
                  </ul>
                  <div id="productTabContent"  className="tab-content">
                    <div  className="tab-pane fade in active" id="product_tabs_description">
                      <div  className="std">
                      <p> {this.state.product.description }</p>
                    </div>
                    </div>
                    <div  className="tab-pane fade" id="product_tabs_details">
                      <div  className="box-collateral box-tags">
                       <table style ={{width: "60%"}}>
                       <tbody  > 
                       <tr>
                         <td  style ={{width: "50%", fontWeight:"bold"}}> Product name </td>
                         <td> {this.state.product.label} </td>
                       </tr>
                       <tr> 
                       <td style ={{  fontWeight:"bold"}}> Category </td>
                       <td> {this.state.product.category} </td>
                       </tr>
                       <tr> 
                       <td style ={{ fontWeight:"bold"}}> TVA </td>
                       <td> {this.state.product.TVA} </td>
                       </tr>
                       <tr> 
                       <td style ={{   fontWeight:"bold"}}> Expiration Date  </td>
                       <td> {this.state.expdate} </td>
                       </tr>
                       <tr> 
                       <td style ={{  fontWeight:"bold"}}> Production Date </td>
                       <td> {this.state.proddate } </td>
                       </tr>
                       <tr> 
                       <td style ={{ fontWeight:"bold"}}> Color  </td>
                       <td> {this.state.product.color} </td>
                       </tr>
                       <tr> 
                       <td style ={{ fontWeight:"bold"}}> Weight </td>
                       <td> {this.state.product.weight } </td>
                       </tr>
                       <tr> 
                       <td style ={{  fontWeight:"bold"}}> Commanded  </td>
                       <td>  20 times </td>
                       </tr>
                       </tbody>
                       </table>
                      </div>
                    </div>
                    <div  className="tab-pane fade in" id="reviews_tabs">
                            <div  className="woocommerce-Reviews">
      <div>
      <h2  className="woocommerce-Reviews-title">2 reviews for <span> {this.state.product.label}</span></h2>
      <ol  className="commentlist">
      <li  className="comment">
      <div>
      <img alt="" src="images/member1.png"  className="avatar avatar-60 photo"/>
      <div  className="comment-text">
      <div  className="ratings">
                            <div  className="rating-box">
                              <div style={{width:"100%"}} className="rating"></div>
                            </div>
                            
                          </div>
      <p  className="meta">
      <strong>John Doe</strong> 
      <span>–</span> April 19, 2018
      </p>
      <div  className="description"><p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    
      </div>
      </div>
      </div>
      </li> 
      <li  className="comment">
      <div>
      <img alt="" src="images/member2.png"  className="avatar avatar-60 photo"/>
      <div  className="comment-text">
      <div  className="ratings">
                            <div  className="rating-box">
                              <div style={{width:"100%"}}   className="rating"></div>
                            </div>
                            
                          </div>
      <p  className="meta">
      <strong>Stephen Smith</strong> <span>–</span> June 02, 2018
      </p>
      <div  className="description"><p>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      </div>
      </div>
      </li> 
      </ol>
      </div>
      <div>
      <div>
      <div  className="comment-respond">
      <span  className="comment-reply-title">Add a review </span>			
      <form action="#" method="post"  className="comment-form" noValidate>
      <p  className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span  className="required">*</span></p>
      <div  className="comment-form-rating">
      <label id="rating">Your rating</label>
      <p  className="stars">
      <span>
      <a  className="star-1" href="#">1</a>
      <a  className="star-2" href="#">2</a>
      <a  className="star-3" href="#">3</a>
      <a  className="star-4" href="#">4</a>
      <a  className="star-5" href="#">5</a>
      </span>
      </p>
      </div>
      <p  className="comment-form-comment">
      <label>Your review <span  className="required">*</span></label>
      <textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
      </p>
      <p  className="comment-form-author">
      <label  >Name <span  className="required">*</span></label> 
      <input id="author" name="author" type="text" value="" size="30" required /></p>
      <p  className="comment-form-email">
      <label  >Email <span  className="required">*</span></label> 
      <input id="email" name="email" type="email" value="" size="30"  required /></p>
      <p  className="form-submit">
      <input name="submit" type="submit" id="submit"  className="submit" value="Submit" />
      </p>
      </form>
      </div> 
      </div>
      </div>
      <div  className="clear"></div>
      </div>
                </div>
                    <div  className="tab-pane fade" id="product_tabs_custom">
                      <div  className="product-tabs-content-inner clearfix">
                        description 
                       </div>
                    </div>
                    <div  className="tab-pane fade" id="product_tabs_custom1">
                      <div  className="product-tabs-content-inner clearfix">
                         description 
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
export default  ProductDetails; 
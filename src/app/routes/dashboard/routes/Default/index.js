import React from "react";
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import Carousel from 'nuka-carousel';  
import { Link  } from "react-router-dom";
import { UncontrolledAlert } from 'reactstrap';
 
import BestSeller from "../../../../../components/BestSeller"
import moment from "moment"; 
 class Default extends React.Component {
   constructor(props){
     super(props); 
    const lastday = moment().endOf('month');
    const no = moment();
    var leftdays = Math.round(moment.duration(lastday.diff(no, 'days'))) ; 
   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
 
     let now = new Date(); 
      this.state={
       currentMonth:  monthNames[now.getMonth()], 
       leftdays: leftdays, 
       networkCheck : navigator.onLine 
     }
      
    }
   
    render() {
      return(
         <div> 
         
         <div  className="best-pro slider-items-products container">
            <div  className="new_title">
              <h2>Best Seller</h2>
              <h4>So you get to know me better</h4>
            </div>
             {this.props.productss.length === 0 
              ? <div style= {{  display: 'flex' , justifyContent:'center', alignItems:'center'}}> 
                <ReactLoading type= "spinningBubbles" color= "black"   />
                </div> 
               :    
            <div className="category-products">
             <ul className="products-grid">
             <Carousel  initialSlideHeight={100}  initialSlideWidth={100} cellAlign="center" > 
             { this.props.productss.map((product)=>{
                 return (
                   <div style= {{  display: "flex" , alignItems: "center" , justifyContent: "center"}}>
                    <li className="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                    <div className="item-inner">
                    {product.reduction === 0 
                    ? null 
                    : <div className="sale-label sale-top-left">- {product.reduction}%</div>
                     }
                    <div className="item-img">
                     <div className="item-img-info"><a  className="product-image">
                     <img  src=  {product.img} /></a>
                     <div className="item-box-hover">
                         <div className="box-inner">
                           <div className="product-detail-bnt">
                           <Link  to={{ pathname: `/app/product/productdetails/${product._id}`, state : {product:product }}}>
                           <a className="button detail-bnt"><span>Quick View</span> </a></Link>   </div>
                            {this.props.auth.isAuthenticated && <a   onClick= {()=>{ this.props.onAddWishlist(this.props.auth.user.id , product._id )}}  className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a>} 
                            <div className="actions">
                           <span className="add-to-links">
                             <a href="grid.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                        </div>
                       </div>
                     </div>
                     
                 </div>
                   <div className="item-info">
                     <div className="info-inner">
                       <div className="item-title"><a   title={product.label}>{product.label}</a> </div>
                       <div className="item-title"><a > {product.commanded} commands </a> </div>

                       <div className="item-content">
                         <div className="rating">
                           <div className="ratings"> 
                             <div className="rating-box"> 
                              </div>
                           </div>
                         </div>
                         <div className="item-price">   
                         </div>
                        </div>
                     </div>
                   </div>
                </div>
                 </li> 
                 </div>
                 )}
                 )
                }
                 </Carousel>
                    </ul>
                    </div> 
                   }              
                 </div> 
                 {this.props.promoproducts.length === 0
                  ? null 
                  :
                  <div  className="hot-section">
                  <div  className="container">
                    <div  className="row">
                      <div  className="ad-info">
                        <h2>Hurry Up!</h2>
                       <h3>Deal of <span  style ={{color:"green"}}> {this.state.currentMonth}</span> </h3>
                      </div>
                    </div>
                    <div  className="row">
                      <div  className="hot-deal">
                        <div  className="box-timer">
                          <div  className=" timer-grid">
                          <div className = "day box-time-date"><span className= "time-num"> {this.state.leftdays} <h4>days </h4></span></div>
                          <div className = "day box-time-date"><span className= "time-num">  2 <h4>hours  </h4></span></div>
                          <div className = "day box-time-date"><span className= "time-num"> 5<h4>minutes  </h4></span></div>
                          </div> 
                           </div>
                           <ul  className="products-grid" style= {{display: 'flex' , justifyContent:'center', alignItems:'center'}}>
                           {this.props.promoproducts.map((product)=>{
                             return (
                               <li  className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                               <div  className="item-inner">
                                 <div  className="item-img">
                                   <div  className="item-img-info"><a  className="product-image"><img src= {product.img} alt={product.label} /></a>
                                     <div  className="new-label new-top-left"> - {product.reduction}% </div>
                                     
                                     <div className="item-box-hover">
                                     <div className="box-inner">
                                       <div className="product-detail-bnt">
                                       <Link  to={{ pathname: `/app/product/productdetails/${product._id}`, state : {product:product }}}>
                                       <a className="button detail-bnt"><span>Quick View</span> </a></Link>   </div>
                                        {this.props.auth.isAuthenticated && <a   onClick= {()=>{ this.props.onAddWishlist(this.props.auth.user.id , product._id )}}  className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a>} 
                                        <div className="actions">
                                       <span className="add-to-links">
                                         <a href="grid.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                    </div>
                                   </div>

                                   </div>
                                </div>
                                 </div>
                                 <div  className="item-info">
                                   <div  className="info-inner">
                                     <div  className="item-title"><a   title= {product.label}>{product.label} </a> </div>
                                     <div  className="item-content">
                                       <div  className="rating">
                                         <div  className="ratings">
                                           <div  className="rating-box">
                                             <div  className="rating" style={{width:"80%"}}></div>
                                           </div>
                                           <p  className="rating-links"><a href="#">1 Review(s)</a> <span  className="separator">|</span> <a href="#">Add Review</a> </p>
                                         </div>
                                       </div>
                                       <div  className="item-price">
                                       {product.reduction === 0 
                                       ? <div  className="price-box"><span  className="regular-price"><span  className="price">{product.pricettc}</span> </span> </div>
                                       :<div  className="price-box"><span  className="regular-price"><span  className="price" style= {{color: "#909090"}} ><del>{product.pricettc}</del></span> </span> 
                                       <span id="product-price-48"  className="price"> $ {product.pricettc - (product.pricettc * product.reduction )/100}</span>
                                       </div>
                                      }
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               
                             </li>
                            
                             )
                           })}
                           </ul>
                        </div>
                       
                      </div>
                    </div>
                 </div>                 
                }


                
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                <div className="blog_inner">
                  <div className="blog-img"> <a href="blog-detail.html"> <img src="/images/blog-img2.jpg" alt="blog image"/> </a>
                    <div className="mask"> <a className="info" href="blog-detail.html">Read More</a> </div>
                  </div> 
                  <div className="blog-info">
                    <div className="post-date">
                      <time className="entry-date" datetime="2015-05-11T11:07:27+00:00">30 <span>June</span></time>
                    </div>
                    <ul className="post-meta">
                      <li><i className="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                      <li><i className="fa fa-comments"></i><a href="#">6 comments</a> </li>
                    </ul>
                    <h3><a href="blog-detail.html">Awesome template with lot's of features on the board!</a></h3>
                    <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis erat sed elit bibendum ...</p>
                  </div>
                </div> 
              </div>
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                  <div className="blog_inner">
                    <div className="blog-img"> <a href="blog-detail.html"> <img src="/images/blog-img2.jpg" alt="blog image"/> </a>
                      <div className="mask"> <a className="info" href="blog-detail.html">Read More</a> </div>
                    </div> 
                    <div className="blog-info">
                      <div className="post-date">
                        <time className="entry-date" datetime="2015-05-11T11:07:27+00:00">30 <span>June</span></time>
                      </div>
                      <ul className="post-meta">
                        <li><i className="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                        <li><i className="fa fa-comments"></i><a href="#">6 comments</a> </li>
                      </ul>
                      <h3><a href="blog-detail.html">Awesome template with lot's of features on the board!</a></h3>
                      <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis erat sed elit bibendum ...</p>
                    </div>
                  </div> 
                </div>

 
                } 
                </div>
 
           )}; 
     

}

 
const mapStateToProps = state => {
  // best seller products
    var productss = state.products; 
    productss.sort(function (prod1, prod2 ) { 
      var aux1 =  parseInt(prod1.commanded, 10); 
      var aux2 =  parseInt(prod2.commanded, 10); 
     if (  aux1 < aux2) return 1;
     if (  aux1 >  aux2) return -1;
     return 0; 
     }) ; 
  // best promoted  products
   var promoproducts= []; 
   state.products.map((w)=>{ 
    if(w.reduction !== 0){
      promoproducts.push(w); 
    }
 })
 promoproducts.filter(w=> w.label === "pro"); 
 console.log(promoproducts)
 // sort  by reduction , 
 promoproducts.sort(function (prod1, prod2 ) { 
  var aux1 =  parseInt(prod1.reduction, 10); 
  var aux2 =  parseInt(prod2.reduction, 10); 
 if (  aux1 < aux2) return 1;
 if (  aux1 >  aux2) return -1;
 return 0; 
 }) ; 
   
      return {
        auth: state.auth, 
        products: state.products, 
        productss: productss.slice(0,3), 
        promoproducts:  promoproducts.slice(0,4)
    }
 
}

export default connect(mapStateToProps)(Default) ; 
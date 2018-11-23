import React from "react" ; 
import { connect } from "react-redux";
import {editProfile} from "../../../../../actions/Auth"; 
 import classnames from "classnames";

class UserAccount extends React.Component{
constructor(props){
  super(props);
 this.state= {
  showInput: true , 
  email : "", 
  errors: {}
}  
}
 

render(){
 
    return(
  <div id="page"> 
   <section  className="main-container col2-right-layout">
    <div  className="main container">
      <div  className="row">
        <section  className="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div  className="my-account">
           <div  className="dashboard">
              <div  className="welcome-msg">
                <p  className="hello"><strong>Hello, {this.props.auth.user.fullname }  </strong></p>
                <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
              </div>
              <div  className="recent-orders">
                <div  className="title-buttons"> <strong>Recent Orders</strong> <a href="#">View All</a> </div>
                <div  className="table-responsive">
                  <table  className="data-table table-striped" id="my-orders-table">
                    <colgroup>
                    <col width="" />
                    <col width="" />
                    <col />
                    <col width="1"/>
                    <col width="1"/>
                    <col width="20%"/>
                    </colgroup>
                    <thead>
                      <tr  className="first last">
                        <th>Order # </th>
                        <th>Date</th>
                        <th>Ship To</th>
                        <th><span  className="nobr">Order Total</span></th>
                        <th>Status</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  className="first odd">
                        <td>12800000002</td>
                        <td><span  className="nobr">5/12/2015</span></td>
                        <td>jhon doe</td>
                        <td><span  className="price">$403.00</span></td>
                        <td><em>Pending</em></td>
                        <td  className="a-center last"><span  className="nobr"> <a href="#">View Order</a> </span></td>
                      </tr>
                      <tr  className="even">
                        <td>12800000001</td>
                        <td><span  className="nobr">5/11/2015</span></td>
                        <td>jhon doe</td>
                        <td><span  className="price">$506.50</span></td>
                        <td><em>Pending</em></td>
                        <td  className="a-center last"><span  className="nobr"> <a href="#">View Order</a> <span  className="separator">|</span> <a href="#"  className="link-reorder">Reorder</a> </span></td>
                      </tr>
                      <tr  className="odd">
                        <td>13100000001</td>
                        <td><span  className="nobr">5/9/2015</span></td>
                        <td>jhon doe</td>
                        <td><span  className="price">$997.84</span></td>
                        <td><em>Pending</em></td>
                        <td  className="a-center last"><span  className="nobr"> <a href="#">View Order</a> <span  className="separator">|</span> <a href="#"  className="link-reorder">Reorder</a> </span></td>
                      </tr>
                      <tr  className="even">
                        <td>12000000002</td>
                        <td><span  className="nobr">4/1/2015</span></td>
                        <td>jhon doe</td>
                        <td><span  className="price">$60.00</span></td>
                        <td><em>Pending</em></td>
                        <td  className="a-center last"><span  className="nobr"> <a href="#">View Order</a> <span  className="separator">|</span> <a href="#"  className="link-reorder">Reorder</a> </span></td>
                      </tr>
                      <tr  className="last odd">
                        <td>12000000001</td>
                        <td><span  className="nobr">4/1/2015</span></td>
                        <td>jhon doe</td>
                        <td><span  className="price">$208.00</span></td>
                        <td><em>Pending</em></td>
                        <td  className="a-center last"><span  className="nobr"> <a href="#">View Order</a> <span  className="separator">|</span> <a href="#"  className="link-reorder">Reorder</a> </span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                 
              </div>
               
              <div  className="box-account">
                <div  className="page-title">
                  <h2>Account Information</h2>
                </div>
                <div  className="col2-set">
                  <div  className="col-1">
                    <div  className="box">
                      <div  className="box-title">
                        <h5>Contact Information</h5>
                        {this.props.auth.user.fullname }
                        {this.props.auth.user.email }<br/>
                        <a onClick={()=>{ this.setState({showInput: !this.state.showInput }) }} >Edit</a> </div>
                        <div hidden = {this.state.showInput}> 
                        <ul className="form-list">
                        <li>
                        <div className="input-box">
                           <input type="email" name="email" value={this.state.email}   
                           className={classnames("input-text required-entry validate-email"  )} title="Email Address"/>
                         </div>
                       </li>
                        </ul>
                        <div className="buttons-set">
                        <button  onClick= {()=>{this.props.onEditProfile(this.props.auth.user.id, "email@ema.dfcm")}} type="button" title="Update email " className="button create-account"  ><span> Update email </span></button>
                    </div>

                     </div>
                      <div  className="box-content">
                        <p> <br/>
                        <br/>
                          <a href="#">Change Password</a> </p>
                      </div>
                       
                    </div>
                     
                  </div>
                  <div  className="col-2">
                    <div  className="box">
                      <div  className="box-title">
                        <h5>Default Shipping Address</h5>
                      <address>
                      {this.props.auth.user.shippingaddr } <br/>                     
                      <a href="#">Edit Address</a>
                      </address>
                    </div>
                    </div>
                     
                  </div>
                </div>
                <div  className="col2">
                  <div  className="box">
                   <div  className="box-content">
                      <div  className="col-1">
                        <h5>Default   Address</h5>
                        <address>
                        {this.props.auth.user.addr } <br/>                     
                        <a href="#">Edit Address</a>
                        </address>
                      </div>
                     
                    </div>
                     
                  </div>
                   
                </div>
              </div>
            </div>
          </div>
        </section>
           <aside  className="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div  className="block block-account">
            <div  className="block-title"> My Account </div>
            <div  className="block-content">
              <ul>
                <li  className="current"><a>Account Dashboard</a></li>
                <li><a href="#"><span> Account Information</span></a></li>
                <li><a href="#"><span> Address Book</span></a></li>
                <li><a href="#"><span> My Orders</span></a></li>
                <li><a href="#"><span> Billing Agreements</span></a></li>
                <li><a href="#"><span> Recurring Profiles</span></a></li>
                <li><a href="#"><span> My Product Reviews</span></a></li>
                <li><a href="#"><span> My Wishlist</span></a></li>
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
                <div  className="item active"><img src="/images/slide2.jpg" alt="slide3"/>
                  <div  className="carousel-caption">
                  <h4>Fruit Shop</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Up to 70% Off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a  className="link" href="#">Buy Now</a></div>
                </div>
                <div  className="item"><img src="images/slide3.jpg" alt="slide1" />
                  <div  className="carousel-caption">
                   <h4>Black Grapes</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Mega Sale</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <a  className="link" href="#">Buy Now</a>
                  </div>
                </div>
                <div  className="item"><img src="images/slide1.jpg" alt="slide2"/>
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
    auth: state.auth ,
    errors: state.errors

   };
};  
const mapDispatchToProps = dispatch => {
  return {
      onEditProfile :  (idUser,newEmail) => {
          dispatch(editProfile(idUser,newEmail ));
      }
  }
}; 
export default connect(mapStateToProps,mapDispatchToProps)(UserAccount); 
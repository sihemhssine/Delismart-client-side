import React from 'react'; 

class Footer extends React.Component { 
render(){
return(
<div className= "footer">
     <div className="footer-inner">
      <div className="newsletter-row">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col1">
              <div className="newsletter-wrap">
                <h5>Newsletter</h5>
                <h4>Get discount 30% off</h4>
                <form action="#" method="post" id="newsletter-validate-detail1">
                  <div id="container_form_news">
                    <div id="container_form_news2">
                      <input type="text" name="email" id="newsletter1" title="Sign up for our newsletter" className="input-text required-entry validate-email" placeholder="Enter your email address"/>
                      <button type="submit" title="Subscribe" className="button subscribe"><span>Subscribe</span></button>
                    </div>
                   </div>
                 </form>
              </div>
             </div>
          </div>
        </div>
       </div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <h4>Shopping Guide</h4>
                <ul className="links">
                  <li><a href="blog.html" title="How to buy">Blog</a></li>
                  <li><a href="faq.html" title="FAQs">FAQs</a></li>
                  <li><a   title="Payment">Payment</a></li>
                  <li><a   title="Shipment">Shipment</a></li>
                  <li><a   title="Where is my order?">Where is my order?</a></li>
                  <li><a   title="Return policy">Return policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <h4>Style Advisor</h4>
                <ul className="links">
                  <li><a href="login.html" title="Your Account">Your Account</a></li>
                  <li><a   title="Information">Information</a></li>
                  <li><a   title="Addresses">Addresses</a></li>
                  <li><a title="Addresses">Discount</a></li>
                  <li><a   title="Orders History">Orders History</a></li>
                  <li><a   title="Order Tracking">Order Tracking</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <h4>Information</h4>
                <ul className="links">
                  <li><a href="sitemap.html" title="Site Map">Site Map</a></li>
                  <li><a   title="Search Terms">Search Terms</a></li>
                  <li><a   title="Advanced Search">Advanced Search</a></li>
                  <li><a href="about_us.html" title="About Us">About Us</a></li>
                  <li><a href="contact_us.html" title="Contact Us">Contact Us</a></li>
                  <li><a   title="Suppliers">Suppliers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-column">
                <h4>Contact Us</h4>
                <div className="contacts-info">
                  <address>
                   <i className="add-icon"></i>ThemesGround, 789 Main rd, 
                  Anytown, CA 12345 USA
                  </address>
                  <div className="phone-footer"><i className="phone-icon"></i>+ 888 456-7890</div>
                  <div className="email-footer"><i className="email-icon"></i><a href="mailto:abc@example.com">Qualis@themesground.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
       <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="social">
              <ul>
                <li className="fb"> </li>
                <li className="tw"> </li>
                <li className="googleplus"> </li>
                <li className="rss"> </li>
                <li className="pintrest"> </li>
                <li className="linkedin"> </li>
                <li className="youtube"> </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 coppyright"> © 2018 ThemesGround. All Rights Reserved. </div>
          <div className="col-xs-12 col-sm-4">
            <div className="payment-accept"> <img    src="/images/payment-1.png" alt=""/> <img    src="/images/payment-2.png" alt=""/> <img    src="/images/payment-3.png" alt=""/> <img    src="/images/payment-4.png" alt=""/> </div>
          </div>
        </div>
      </div>  
     </div>
)}
}
export default Footer ; 
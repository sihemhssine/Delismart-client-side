import React from  "react"

class Testimony extends React.Component{
render(){
    return(
        <div className="row">
          <div className="testimonials-section slider-items-products">
            <div  id="testimonials" className="offer-slider parallax parallax-2">
              <div className="slider-items slider-width-col6">
                <div className="item">
                  <div className="avatar"><img    src="/images/member1.png" alt="Image"/></div>
                  <div className="testimonials">Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people!</div>
                  <div className="clients_author"> Smith John <span>Happy Customer</span> </div>
                </div>
                <div className="item">
                  <div className="avatar"><img    src="/images/member2.png" alt="Image"/></div>
                  <div className="testimonials">Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated.</div>
                  <div className="clients_author"> Karla Anderson <span>Happy Customer</span> </div>
                </div>
                <div className="item">
                  <div className="avatar"><img    src="/images/member3.png" alt="Image"/></div>
                  <div className="testimonials">Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them!</div>
                  <div className="clients_author"> Stephen Smith <span>Happy Customer</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
}
}
export default Testimony
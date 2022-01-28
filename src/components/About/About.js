import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div>
            <div id="about" className="container main-about">
                <div className="about row">
                    <div className="col-sm-12 col-md-6 col-lg-6 "> </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 backgroun-colorChange">
                     <div className="about-title">
                       <div className="aboutPartOne">
                       <h3 className="about-text1">About</h3>
                         <h3 className="about-text2">Our restaurant</h3>
                       </div>
                       <div className="aboutPartTwo">
                           <div className="contactDetails mt-2 ">
                               <span className="location m-3"><i className="fas fa-map-marker-alt location"></i></span>
                               <span className="phone m-3"><i className="fas fa-phone-alt phone"></i></span>
                               <span className="mesage m-3"><i className="fas fa-envelope message"></i></span>
                           </div>
                           <div className="ofOnRestaurant mt-3">
                               <span className='hours mb-3'>Hours</span><br />
                               <span className='times'>Monday-12pm-9pm</span><br />
                               <span className='times'>Tuesday-12pm-9pm</span><br />
                               <span className='times'>Wednesday-12pm-10pm</span><br />
                               <span className='times'>Thursday-12pm-10pm</span><br />
                               <span className='times'>Friday-12pm-10pm</span><br />
                               <span className='times'>Sunday-12pm-10pm</span><br />

                           </div>
                           <div className="phoneInfo ">
                               <h3 className='phonrInfo mt-3'>
                                   Phone
                               </h3>
                               <span className="number1">+8801643-559826</span> <br />
                               <span className="number2">+8801701-717546</span> <br />
                               <button className='orderPickup'>ABOUT US</button>
                           </div>
                       </div>
                     </div>
                        
                        
                        </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 backgroun-colorChange">
                        <div className="main-order">

                            <div className="partOneOrder">
                                <h2 className="orderTitle">
                                    ORDER
                                </h2>
                                <span className="titleOrder">
                                    Pick-up & delivery
                                </span>
                            </div>

                                <div className="orderDetail">
                                    <span className="contactless">CONTACTLESS TAKE-OUT</span> <br />
                                    <p className="aas">
                                    To place an order for pickup,please order via Square here.
                                    </p>
                                </div>
                                
                                <div className="delivery-expanded ">
                                    <span className="expended">
                                    DELIVERY-EXPANDED
                                    </span> <br />
                                    <p className="placeOrderPara">
                                    To place an order for delivery, please choose from one of our partners below: 
                                   <br /> <Link className='linkOrder' to='/'>Postmates</Link>
                                    <Link className='linkOrder' to='/'>rubHub,</Link>
                                    <Link className='linkOrder' to='/'> Seamless & UberEats</Link>
                                    </p>
                                </div>
                                <button className='orderPickup'><span className='noselect'> </span>OrderPickup</button>



                        </div>
                        
                        </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 "></div>
                </div>
            </div>
        </div>
    );
};

export default About;
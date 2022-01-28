import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className=" text-light bg-dark p-5 ">
           <div className="container mainFooter">
               <div className="readFood text-center">
                   <span>Food Lovers</span> <br />
                   <span className='detailsAddress'>140 WEST 4TH | NY,NY 1002</span> <br />
                   <span className='datedd'>212.260.1212 | 212.260.7049</span>
               </div>
               <div className="d-none-sm ">
                   <ul className='footerLink d-flex m-4'>
                       <li className='linkFooter'><Link  className='footerLinks' to="w#">Menu</Link></li>
                       <li className='linkFooter'> <Link className='footerLinks'  to="w#">Menu</Link></li>
                       <li className='linkFooter'><Link  className='footerLinks' to="w#">Menu</Link></li>
                       <li className='linkFooter'><Link  className='footerLinks' to="w#">Menu</Link></li>
                       <li className='linkFooter'><Link  className='footerLinks' to="w#">Menu</Link></li>
                       <li className='linkFooter'><Link  className='footerLinks' to="w#">Menu</Link></li>
                     
                   </ul>
               </div>
               <div className="footerInfo">
                   <div className="row">
                       <div className="col footerImage"><img width="100px" className="img-fluid " src="https://i.ibb.co/0mKGZPx/food-logos-removebg-preview.png" alt="" /></div>
                       <div className="col">
                       <ul className="socialIcons mt-2 d-flex m-1">
                        <li className='facebook '><a className=" facebookLink" href="https://www.facebook.com/Sourov.Paul.Web.Developer"><i className="fab fa-facebook facebookColor"></i></a></li>
                        
                         <li className='centerSocialIcon ms-3'><i className="fab fa-instagram instagramColor"></i></li>

                         <li className='linkedIn ms-3 '><a className='linkedinLink dfdfd' target={'_black'} href="https://www.linkedin.com/in/sourov-paul-169668150"><i className="fab fa-linkedin linkedinColor"></i></a></li>
                        </ul> <br />
                           &copy; 2022 Red 
                        <Link className="navbar-brand" to="/home"><span className="foodLover1"> Food</span><span className='foodLover2'>Lover</span></Link>
                       -All Rights Reserved Designs by Mark <b>Sourov Paul</b></div>
                       <div className="col"></div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Banner.css';
import { NavLink } from 'react-router-dom';



const Banner = () => {
    return (
        <div className="bg-light banner-MainPart">
         <div className="row m-auto d-flex bd-highlight mb-3 container ">
               <div className="p-2 col-sm-12 col-md-6 col-lg-6 p-4 ">
                   <div className="mainSearchBox mt-4">
                      

                       <span className=" specialDish">Our Special Dish</span><br />
                       <h2 className=" friedChicken mt-1">Find Your Food</h2> <br />
                       <p className="fooddes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque labore nesciunt exercitationem rerum eligendi maiores saepe voluptas quae a.</p>
                      <br />
                       <NavLink to="ourFoods" className='orderBannerFoods'>Order Now</NavLink>
                   </div>
               </div>
        <div className="col-sm-12 col-md-6 col-lg-6 p-4 ">
      <img className='img-fluid banner-image' src="https://i.ibb.co/TchdkRZ/salad9-removebg-preview.png" alt="" />
         </div>
         </div>
        </div>
    );
};

export default Banner;
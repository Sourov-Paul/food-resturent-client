import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navigation from "./../Navigation/Navigation";
import Banner from "./../Banner/Banner";
import FoodCard from "./../FoodCard/FoodCard";
import Zoom from "react-reveal/Zoom";
import About from './../About/About';
import LastBanner from './../LastBanner/LastBanner';
import useAuth from "../hooks/UseAuth";
import FacebookMessanger from "../FacebookMessanger/FacebookMessanger";
import Footer from "../shared/Footer/Footer";
import "./Home.css";

const Home = () => {

  const {isLoading,user}=useAuth()
  return (
    <div id="home">
      <Navigation></Navigation>
      {
        user?.emailVerified ?"": <h6 className="sticky-top verifyWarning">
          <i id='worrning' className="fas fa-exclamation-triangle"></i>To get all the services, open an account and verify email.{ user?.email ?<a className="clickHare" href="https://mail.google.com/mail/u/0/#inbox" >Click here </a>:<Link to="login">Click here</Link>} </h6>
      
      
      }
      <Banner></Banner>
      <FoodCard></FoodCard>
      <div className=" homeLinkNetive">
        <div className=" container">
          <NavLink
          
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="/"
          >
            Our Salads
          </NavLink>
          <NavLink
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="popularDrinks"
          >
            Our Drinks
          </NavLink>
          <NavLink
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="ourShef"
          >
            Our Shef
          </NavLink>
        </div>
      </div>
      <Zoom top>
        <Outlet></Outlet>
      </Zoom>
      <br />
      <br />
    
   {!isLoading&& <div>
      
    <About></About>
  
      <LastBanner></LastBanner>
      <FacebookMessanger></FacebookMessanger>
      <Footer></Footer>
    </div>
}
{
            isLoading &&  <div className="main-loading d-flex align-items-center mt-5 m-5">
            <div className="ring mt-5"></div>
            <div className="ring mt-5"></div>
            <div className="ring mt-5"></div>
            <p className='text-dark'>Loading...</p>
          </div>
        }
    </div>
  );
};

export default Home;

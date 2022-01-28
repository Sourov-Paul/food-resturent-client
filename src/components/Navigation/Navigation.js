import React,{useState} from 'react';
import './Navigation.css'
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import {  NavLink } from 'react-router-dom';
import useAuth from './../hooks/UseAuth';



const Navigation = () => {
  const {user,logOut,admin}=useAuth();

  // Nav bar hackground handle

  const [navbar,setNavbar]=useState(false);


const changeBackground=()=>{
 if(window.scrollY>=80){
   setNavbar(true)
 } else{
   setNavbar(false)
 }
 
}
window.addEventListener('scroll',changeBackground)

    return (
        <div className="sticky-top">
          
            <nav  className= {navbar?'  navbar-expand-lg navbar ':'navbar-expand-lg navbar  navBarBackground'}   >
  <div className="container">
   <Flip> <NavLink className="navbar-brand" to="/home"><span className="foodLover1">Food</span><span className='foodLover2'>Lover</span></NavLink></Flip>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
        <Rotate top left>  <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink></Rotate>
        </li>
        <li className="nav-item">
        <Rotate top left>  <a className="nav-link" href="#about">About Us</a></Rotate>
        </li>
        <li className="nav-item">
        <Rotate top left>  <a className="nav-link"  href="https://form.jotform.com/220032823283446">Contact</a></Rotate>
        </li>
        <li className="nav-item">
        <Rotate top left>  <NavLink className="nav-link" to="/ourFoods">Our Foods</NavLink></Rotate>
        </li>

        {
          admin && <li className="nav-item">
          <Rotate top left>  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></Rotate>
          </li>
        }

        <li className="nav-item">
        <Rotate top left>  <NavLink className="nav-link" to="/placeOrder">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
          </NavLink></Rotate>
        </li>






        <li className="nav-item">
        <Rotate top left>  <span className="nav-link" >{user.displayName}</span></Rotate>
        </li>
        
        <li className="nav-item">
        <Rotate top left> {
          user?.email ?<NavLink onClick={logOut} className="nav-link" to="/login"><i className="fas fa-sign-in-alt "></i>Sign Out</NavLink> :<NavLink className="nav-link" to="/login"><i className="fas fa-sign-in-alt "></i>Sign In</NavLink>
        } </Rotate>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;
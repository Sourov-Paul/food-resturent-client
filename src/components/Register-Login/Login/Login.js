import React,{useState} from 'react';
import './Login.css';
import Navigation from './../../Navigation/Navigation';
import { Button,TextField} from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/UseAuth';
import Swal from 'sweetalert2'

const Login = () => {
  const {isLoading,logInUser, error,signInWithGoogle,signInWithFacebook}=useAuth()
const [loginData,setLoginData]=useState({});

    const location=useLocation();
    const navigate=useNavigate()





    // handle onchange
    const handleOnBluer=e=>{
        const field= e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

// handleLoginSubmit
    const handleLoginSubmit= e =>{
        logInUser(loginData.email,loginData.password,location,navigate)
    
        e.preventDefault()
    }
    
  
    // error message
const errorHandleMessage=()=>{
    Swal.fire({
        icon: 'Error',
        title: 'Oops...',
        text: 'Something went wrong! Try Again'
      })
  }
    return (
        <div className='mainlogin '>
            <Navigation></Navigation>
           {!isLoading&&  <div className=" mainRegesterDiv">
        <div className=" row m-auto container">
            <h2 className="text-center m-2">Login Here</h2>
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
          <form className="registerForm  mt-5" onSubmit={handleLoginSubmit}>
   
        
         <TextField
         className="m-2"
          id="outlined-Email-input"
          label="Email"
          type="email"
          name="email"
          onBlur={handleOnBluer}
          required
          autoComplete="off"
        /> <br />
        
         <TextField
         onBlur={handleOnBluer}
         className="m-2"
          id="outlined-password-input"
          label="Your Password"
          type="password"
          name="password"
          required
          autoComplete="off"
         
        /> <br />
   
          <div className="divPopupSIgnin text-center">
        <Button className='subMitButton '  type='submit'>Submit</Button> <br />
          <NavLink  to='/register'>Please Register</NavLink> <br /> 
          <span className='googleSignInButton text-center m-2' onClick={signInWithFacebook}><i className="fab fa-facebook facebookKogin"></i></span>
          <span className='facebookSignInButton text-center m-2 gmailId' onClick={signInWithGoogle} > <img className="img-fluid googleSignInImg gmailId" width="25px" src="https://i.ibb.co/JsVn2fb/google-logo-removebg-preview.png" alt="" /> </span>
         
          </div>
          </form>
          
        </div>
        <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
        <img className="img-fluid" src="https://i.ibb.co/j3vr6Jd/undraw-Mobile-login-re-9ntv-removebg-preview-removebg-preview-1.png" alt="" />
        </div>
        </div>
        </div>
       
        }
        
         {
            error && errorHandleMessage()
         }
        {
            isLoading &&  <div className="main-loading d-flex align-items-center mt-5">
            <div className="ring mt-5"></div>
            <div className="ring mt-5"></div>
            <div className="ring mt-5"></div>
            <p className='text-dark'>Loading...</p>
          </div>
        }
        </div>
    );
};

export default Login;
import React,{useState} from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import useAuth from './../../hooks/UseAuth';
import Swal from 'sweetalert2'



const Register = () => {

  const {registerUser,error,isLoading,user}=useAuth();

    const [registationInfo,setRegistationInfo]=useState({})
   
   const navigate=useNavigate()
   
    // onBlur Change

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...registationInfo};
        newLoginData[field]=value;
        setRegistationInfo(newLoginData)

    }

    // submit form
    const handleRegSubmite=e=>{
        if(registationInfo.password !== registationInfo.password2){
          Swal.fire({
          
            icon: 'error',
            title: 'Password does not match',
           
          })
            return
        }
        registerUser(registationInfo.email,registationInfo.password,registationInfo.name,navigate)
       
        e.preventDefault()
    }
    
    // sucess message
    const succeessMessageSender=()=>{
      Swal.fire({
       
            icon: 'success',
            title: 'Registration Successfully',    
            text:'Please Verify Your Email',
          })
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
        <div className=" mainRegesterDiv">
          <Navigation></Navigation>
          {
       user.email && <h6 className="alreadyReg m-2">You already registered.Please logout and after try to register</h6>
     
     }
       {
         !isLoading&&  <div className=" row m-auto container">
         <h2 className="text-center m-2">Register Here</h2>
         {/* <h2 className="text-center m-2">72-3 start</h2> */}
     <div className="secondRegisterDiv col-sm-12  col-md-6 col-lg-6">
         <form className="registerForm  mt-5" onSubmit={handleRegSubmite}>
         
      <TextField
      className=" m-1"
      onBlur={handleOnBlur}
       label="Name"
       type="name"
       name="name"
       required
       
     /> <br />
      <TextField
       className="m-1"
      onBlur={handleOnBlur}      
       label="Email"
       type="email"
       name="email"
       required
       
     /> <br />
     
      <TextField
       className="m-1"
      onBlur={handleOnBlur}     
       label="Password"
       type="password"
       name="password"
       required
      
     /> <br />
      <TextField
      className="m-1"
      onBlur={handleOnBlur}     
       label="Re-Password"
       type="password"
       name="password2"
       required
      
     /><br />
               <div className="divPopupSIgnin text-center">
               <Button className='subMitButton' type='submit'>Submit</Button>

<h2>{error}</h2>
        <NavLink className='text-center' to="/login">Please Login</NavLink>
               </div>
   
         </form>
     </div>
     <div className="secondRegisterDiv col-sm-12 col-md-6 col-lg-6 mt-5">
        <img className="img-fluid" src="https://i.ibb.co/GV1c3gS/undraw-unlock-24mb-removebg-preview.png" alt="" />

     </div>
     {
       user.email && succeessMessageSender()
     
     }
     
      {
             error && errorHandleMessage()
          }
     </div>
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

export default Register;
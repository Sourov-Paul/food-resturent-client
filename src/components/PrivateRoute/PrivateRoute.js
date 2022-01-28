import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../hooks/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    let location=useLocation()
    if  (isLoading) {
        return <div className="main-loading d-flex align-items-center mt-5">
        <div className="ring mt-5"></div>
        <div className="ring mt-5"></div>
        <div className="ring mt-5"></div>
        <p className='text-dark'>Loading...</p>
      </div>
    }
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}}/>



    
};

export default PrivateRoute;

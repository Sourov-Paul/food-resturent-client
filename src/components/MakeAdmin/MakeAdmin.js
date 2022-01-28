import React from 'react';
import './MakeAdmin.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from './../hooks/UseAuth';

const MakeAdmin = () => {

    const{token}=useAuth()
    const [email,setEmail]=useState('');


        const handleOnBluer=e=>{
            setEmail(e.target.value)
        }

        const handleAdminSubmit=e=>{
            const user={email}
            fetch('http://localhost:5000/users/makeAdmin',{
                method:'PUT',
                headers:{
                    'authorization':`Bearer ${token}`,
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.modifiedCount){
                   setEmail('')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
               }
            })

            e.preventDefault();
        }
    return (
        <div className='d-flex justify-content-center m-5'>
            <div className="mainAdmin ">
                
            <form onSubmit={handleAdminSubmit}>
                <label className='makeAdminLabel m-2' htmlFor="admin">Admin</label> <br />
                <input onBlur={handleOnBluer} className="adminInput m-2" type="email" name="admin" id="admin" /> <br />
                <input className='m-2 adminSubmitBtn' type="submit" value="Make Admin" />
            </form>
            </div>
            
        </div>
    );
};

export default MakeAdmin;
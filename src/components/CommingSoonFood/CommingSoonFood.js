import React from 'react';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import CommingFood from './CommingFood';
import useAuth from './../hooks/UseAuth';

const CommingSoonFood = () => {

   
    const[commingFoods,setCommingFoods]=useState([])
    useEffect(()=>{
        fetch('https://stormy-gorge-03784.herokuapp.com/addFoods')
        .then(res=>res.json())
        .then(data=>setCommingFoods(data))
    },[]);

    const alert2=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleDeleteProduct=id=>{
       const proceed=window.confirm(alert2())
    if(proceed){
        const url=`https://stormy-gorge-03784.herokuapp.com/addFoods/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
               
                  const matchingId=commingFoods.filter(orderData=>orderData._id !==id)
                  setCommingFoods(matchingId)
               }
})
    }
    }
    
    const {isLoading}=useAuth()


    return (
        <div>
          {
              !isLoading &&   <div className=" row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 m-auto row">
              {
                  commingFoods.map((product)=> <CommingFood
                   key={product._id} 
                   product={product}
                    handleDeleteProduct={handleDeleteProduct}
                    ></CommingFood>)
              }
               </div>
          }
        </div>
    );
};

export default CommingSoonFood;
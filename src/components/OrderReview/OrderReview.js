import React, { useState } from 'react';
import UseCart from './../UseCart/UseCart';
import { useEffect } from 'react';
import Cart from '../OurFoods/Cart/Cart';
import useAuth from '../hooks/UseAuth';
import ReviewItem from './../ReviewItem/ReviewItem';
import { removeFromDb } from '../LocalStorage/LocalStorage';

const OrderReview = () => {
    const {isLoading}=useAuth()

    const [products,setProducts]=useState([]);
    const [cart,setCart]=UseCart(products);
    
    // page size
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res=>res.json())
        .then(data=>setProducts(data.meals));
     
    },[])
  


    // remove irder item
    const handleRemove=idMeal=>{
    const newCart=cart.filter(product=>product.key !==idMeal);
    setCart(newCart);
    removeFromDb(idMeal)
    }




    return (
        <div>
    
       <div className='our  sempolProduct'>
              {!isLoading&&  <div className=" row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 m-auto row">
             {
                 cart.map(product=><ReviewItem 
                    key={product.idMeal}
                     product={product}
                     handleRemove={handleRemove}
                     
                     ></ReviewItem>)
             }
        
       </div>
      
       } 
       <div className="d-flex">
       </div>
       {
           isLoading &&  <div className="main-loading d-flex align-items-center mt-5 m-5">
           <div className="ring mt-5"></div>
           <div className="ring mt-5"></div>
           <div className="ring mt-5"></div>
           <p className='loadingText text-dark'>Loading...</p>
         </div>
       }
       </div>
            <Cart cart={cart} ></Cart>
        </div>
    );
};

export default OrderReview;
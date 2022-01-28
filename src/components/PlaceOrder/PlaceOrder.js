import React from 'react';
import './PlaceOrder.css';
import OrderReview from './../OrderReview/OrderReview';
import useAuth from './../hooks/UseAuth';

const PlaceOrder = () => {
    
    // handle loading using useFirebase function
    const {isLoading}=useAuth()

    return (
        <div>
            {
                !isLoading && <OrderReview></OrderReview>
            }
           
        </div>
    );
};

export default PlaceOrder;
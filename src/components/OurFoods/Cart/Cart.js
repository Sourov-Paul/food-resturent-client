import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const Cart = ({cart}) => {

    let totalQuantity=0;
    // total count for loop
    let total=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        const id=parseInt(product.idMeal.slice(0,3))
        total=(total +id)*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }

       
    const shipping=total>0?5:0;
    const tax=(total+shipping)*0.05;
    const grandTotal=total+shipping+tax;

    return (
        <div>
             <h2>Order Summary</h2>
                <h6>Items Ordered {totalQuantity}</h6>
                <h5>Total: {total} Tk</h5>
                <h6>Shipping: {total.toFixed(2)} Tk</h6>
                <h6>Tax: {tax.toFixed(2)} Tk</h6>
                <hr />
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
                <Button><Link to='/placeOrder'>Place Order</Link></Button>

        </div>
    );
};

export default Cart;
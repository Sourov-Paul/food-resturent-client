import React from 'react';

const ReviewItem = (props) => {

    const {strMeal,idMeal,strMealThumb ,quantity}=props.product;
    const {handleRemove}=props;
    console.log(props.product);
    return (
        <div>
            <img className='img-fluid' src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h5>Price: {idMeal.slice(0,3)} TK</h5>
            <h6>Quantity {quantity}</h6>
            <button onClick={()=>handleRemove(idMeal)} className='regular bg-dark rounded'> Remove</button>
        </div>
    );
};

export default ReviewItem;
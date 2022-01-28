import React from 'react';
import { Rating } from '@mui/material';

const CommingFood = (props) => {

const {handleDeleteProduct}=props;

    const {_id,name,title,foodImg,country,star,youtube}=props.product ;
       return (
        <div className='tenProduct '>
        <div className="col mainCard container">
         <div className="card ">
      <img src={foodImg} className="m-auto p-2 img-fluid card-img " alt="..." />
      <div className="card-body">
        <h5 className="card-title titleColor"> {name}</h5>
        <p className="card-text">{title} <br />
       
       
        
        </p>
        <br />
      
        <p className="card-text area">Country: <span className="countryName">{country}</span> </p>
            <Rating
                  name="simple-controlled"
                  value={star}
                 
                /> <br />
                    <span><a className='recipes' href={youtube}>Recipes: <i className="fab fa-youtube"></i></a></span> <br />
        <button  className='orderButton border-0 p-2 rounded'>Comming soon...</button> <br />
        <button onClick={()=>handleDeleteProduct(_id)} className="btn button delete-order-btn p-2"><i className="far fa-trash-alt delete m-2"></i>Delete</button>
      </div>
    </div>
         
     </div>
       
  </div>
    );
};

export default CommingFood;
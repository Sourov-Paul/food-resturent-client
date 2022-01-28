import { Rating } from '@mui/material';
import React,{useState} from 'react';
import './Foods.css';



const Foods = (props) => {
  const {strMeal,strMealThumb,strInstructions,strYoutube,strArea,idMeal}=props.food;
        // rating state
    const [value, setValue] = React.useState(4);

   // visible card text
   const [visibleCardText,setVisibleCardText]=useState(50)
   // card show more
   const showMoreText=()=>{
       setVisibleCardText((prevValue)=>prevValue+1000);
            document.getElementById("textSeeMore").style.display ="none";

       document.getElementById("textLessMore").style.display = "block";

   }
   
 return (
   <div className='tenProduct '>
         <div className="col mainCard container">
          <div className="card ">
       <img src={strMealThumb} className="m-auto p-2 img-fluid card-img " alt="..." />
       <div className="card-body">
         <h5 className="card-title titleColor"> {strMeal}</h5>
         <p className="card-text">{strInstructions.slice(0,visibleCardText)} <br />
        
        
         <span id='textSeeMore' className="textSeeMore" onClick={showMoreText}>See More...</span> <br />
         
         </p>
         <br />
         <span className="price">{idMeal.slice(0,3)} Tk</span>
         <p className="card-text area">Country: <span className="countryName">{strArea}</span> </p>
             <Rating
                   name="simple-controlled"
                   value={value}
                   onChange={(event, newValue) => {
                       setValue(newValue);
                     }}
                 /> <br />
                     <span><a className='recipes' href={strYoutube}>Recipes: <i className="fab fa-youtube"></i></a></span> <br />
         <button onClick={()=>props.handleAddToFood(props.food)} className='orderButton border-0 p-2 rounded'>Order</button>
       </div>
     </div>
          
      </div>
        
   </div>
 );
    
};

export default Foods;
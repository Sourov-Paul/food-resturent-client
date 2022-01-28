import React, { useEffect , useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Foods from './Foods/Foods';
import './OurFoods.css'
import useAuth from './../hooks/UseAuth';
import Cart from './Cart/Cart';
import { addToDb, getStoredCart } from '../LocalStorage/LocalStorage';
const OurFoods = () => {

    const {user,isLoading}=useAuth()

    
    const [foods, setFoods]=useState([]);
//    displayFoods
    const[displayFoods,setDisplayFoods]=useState([])
  
    // visible cards
    const [visible,setVisible]=useState(6);
//    order Product state
    const [cart,setCart]=useState([]);


    
    // page size
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res=>res.json())
        .then(data=>{
            setFoods(data.meals);
            setDisplayFoods(data.meals);
           
        });
     
    },[foods.length])
  

      // handle add to food
      const handleAddToFood=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        // save to localStorage
        addToDb(product.idMeal)
    }




    // LocalStorage 

    useEffect(()=>{
        if (foods.length) {
            const saveCart = getStoredCart();
            // const addedProduct 
            const storedCart=[]
            for (const idMeal in saveCart) {
            const addedProduct = foods.find((product) => product.idMeal===idMeal);
           if(addedProduct){
               const quantity=saveCart[idMeal];
               addedProduct.quantity=quantity;
               storedCart.push(addedProduct)
           }
            }
            setCart(storedCart)
        }
    },[foods])

  



// card show more
const showMoreFoods=()=>{
    setVisible((prevValue)=>prevValue+3)
}
// card show more
const hideMoreFoods=()=>{
    setVisible((prevValue)=>prevValue-3)
}




        // handle search
        const handleSearch=event=>{
            const searchText=event.target.value;
            const matchFoods=foods.filter(food=>food.strMeal.toLowerCase().includes(searchText.toLowerCase()));
            setDisplayFoods(matchFoods)
        }

      
    return (
        <div>
            
        {            
            user.emailVerified ? <div className="homeDemoFoods">
            <Navigation></Navigation>
            <div className="searchContainesCls">
                
            <div className="  m-auto searchBox">
                <div className="shadow"></div>
                <input placeholder='Search Food....' className=' ' onChange={handleSearch} type="search" name="" id="" />
           <ion-icon name="search-outline"></ion-icon>
            </div>
            {/* place order */}
            <div className="placeOrderContainer">
               <Cart cart={cart} ></Cart>
                </div>
            </div>
       <div className='our  sempolProduct'>
              {!isLoading&&  <div className=" row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 m-auto row">
             
       {
           displayFoods.slice(0,visible).map((food)=><Foods handleAddToFood={handleAddToFood} foods={foods} key={food.idMeal} food={food} />)
       }
       </div>
      
       } 
       <div className="d-flex justify-content-center">
       <span  className=" mt-3"onClick={hideMoreFoods}><i  className="fas fa-arrow-circle-left m-2"></i></span>
       <span className=" mt-3" onClick={showMoreFoods}><i className="fas fa-arrow-circle-right m-2"></i></span>
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
    
       </div> : <h2 className='verifyEmail'><i id='worrning' className="fas fa-exclamation-triangle"></i>To get all the services, open an account and verify email.<a className="clickHare" href="https://mail.google.com/mail/u/0/#inbox" >Click here </a></h2>
        }
        </div>
    );
};

export default OurFoods;
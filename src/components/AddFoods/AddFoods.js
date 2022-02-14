import { Alert, AlertTitle, Button } from '@mui/material';
import React, { useRef,useState} from 'react';
import "./AddFoods.css";







const AddFoods = () => {

    const nameRef=useRef();
    const titleRef=useRef();
    const foodImgRef=useRef();
    const countryRef=useRef();
    const starRef=useRef();
    const youtubeRef=useRef();

// sucess message
const [sucess,setSucess]=useState(false)
// error message
const [error,setError]=useState('')
    const handleAddFoods=e=>{
        const name=nameRef.current.value;
        const title=titleRef.current.value;
        const foodImg=foodImgRef.current.value;
        const country=countryRef.current.value;
        const star=starRef.current.value;
        const youtube=youtubeRef.current.value;



         const newFods={name,title,foodImg,country,star,youtube}
         fetch('https://stormy-gorge-03784.herokuapp.com/addFoods',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newFods)
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.insertedId){
                 setSucess(true)
               e.target.reset()
             }
         }).catch((error)=>{
             setError(error)
         })
        e.preventDefault()
    }
    return (
      <div>

        <div className="foodAddingMainContainer m-auto">
          <div className="containerDiv">
            <form id="contact" onSubmit={handleAddFoods}>
              <h4 className="formTitle">You want to add new Food?</h4>
              <h4 className="formTitle2">Please fill up the form.</h4>
              <fieldset>
                <input
                  placeholder="Food name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                  ref={nameRef}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Whice Country"
                  type="text"
                  tabindex="2"
                  required
                  ref={countryRef}
                />
              </fieldset>

              <fieldset>
                <input
                  placeholder="Food Image Link"
                  type="url"
                  tabindex="4"
                  required
                  ref={foodImgRef}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Recipe Video Link"
                  type="url"
                  tabindex="4"
                  required
                  ref={youtubeRef}
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type Food Description..."
                  tabindex="5"
                  required
                  ref={titleRef}
                ></textarea>
              </fieldset>
              <fieldset>
                <span className="ratingIcon">Rating 1-5</span> <br />
                <input
                  step="1"
                  min="0"
                  max="5"
                  placeholder="Rating"
                  type="range"
                  tabindex="3"
                  required
                  ref={starRef}
                />
              </fieldset>
              <fieldset>
                <Button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                
                >
                  Upload
                </Button>
              </fieldset>
            </form>
            {sucess && (
              <Alert severity="success">
                <AlertTitle>Card added Successfully</AlertTitle>
              </Alert>
            )}
            {error && <span>Please Try Again</span>}
          </div>
        </div>
      </div>
    );
};

export default AddFoods;
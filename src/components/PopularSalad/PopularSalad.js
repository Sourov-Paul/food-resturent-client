import React, { Component } from "react";
import Slider from "react-slick";
import './PopularSalad.css'
import Rating from 'react-rating';

const services=[
  {
    id:"1",
    img:"https://i.ibb.co/TchdkRZ/salad9-removebg-preview.png",
    title:'This is title',
    text:'This is text'
  },
  
  {
    id:"2",
    img:"https://i.ibb.co/2F085PG/salad7-removebg-preview.png",
    title:'This is title',
    text:'This is text',
    rate:5
  },
  {
    id:"3",
    img:"https://i.ibb.co/0JZFNHT/salad2-removebg-preview.png",
    title:'This is title',
    text:'This is text',
    rate:4
  },
  {
    id:"4",
    img:"https://i.ibb.co/YjBqFcK/salad3-removebg-preview.png",
    title:'This is title',
    text:'This is text',
    rate:5
  },
  {
    id:"5",
    img:"https://i.ibb.co/wLDZjsT/salad6-removebg-preview.png",
    title:'This is title',
    text:'This is text',
    rate:3
  },
  {
    id:"6",
    img:"https://i.ibb.co/ph562zt/salad5-removebg-preview.png",
    title:'This is title',
    text:'This is text',
    rate:5
  }
  

]
export default class PopularSalad extends Component {

   // rating state
 
  
 

    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
        };
      
    return (
      <div>
        
          
        <div className=" responsiveLageDevice">
            <div className="mainSaladContainer container m-auto">
                <div className="container styleBackground">
                <div className="row large-device">
        <Slider {...settings}>
         {
           services.map((service)=>(
            <div className="col-sm-12">
            <div className="saladItem">
           
    <div className="">
      <div className="card largeCard">
        <img className="img-fluid img-setting card-img-top" src={service.img}   alt="..." />
          <div className="card-body">
          <Rating
                    className="reting "
                     size={40}
                      initialRating={service.rate}
                      emptySymbol="far fa-star 'red'"
                      fullSymbol="fas fa-star icon-color2"
                      readonly></Rating>
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.text}</p>
        </div>
      </div>
    </div>
   
            </div>
            </div>
           ))
         } 
         
        
        </Slider>
      </div>
                </div>
            </div>
        </div>
{/* small device */}

<div className=" smollDevice container m-auto row">
       {
         services.map((service=>(
          <div className="col-sm-12 col-md-6 col-lg-4">

    <div className="card">
      <img className="img-fluid img-setting card-img-top" src={service.img}  alt="..." />
      <div className="card-body">
      <Rating
                  className="reting "
                   size={40}
                    initialRating={5}
                    emptySymbol="far fa-star 'red'"
                    fullSymbol="fas fa-star icon-color2"
                    readonly></Rating>
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.text}</p>
 
    </div>
  </div>
  </div>
         )))
       }

 
         
       
          
         
        
         
         
          
        </div>
        </div>
    )

}}
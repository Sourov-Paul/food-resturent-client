import React from 'react';
import './OurShefs.css'
import { Component } from "react";
import Slider from "react-slick";
import Rating from 'react-rating';

const services=[{
  img:'https://i.ibb.co/g717BLq/Shot-of-two-young-cooks-preparing-food-in-the-kitchen.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:5,
  id:1
},
{
  img:'https://i.ibb.co/RgyCP95/shef3.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:4,
  id:2
},
{
  img:'https://i.ibb.co/m09pZLv/shef8.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:4,
  id:3
},
{
  img:'https://i.ibb.co/qMS2sm9/shef2.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:5,
  id:4
},
{
  img:'https://i.ibb.co/g37RJB2/shef7.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:3,
  id:5
},
{
  img:'https://i.ibb.co/TrKfq6y/shef6.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:5,
  id:6
},
{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sushi_chef_Masayoshi_Kazato_02.JPG/800px-Sushi_chef_Masayoshi_Kazato_02.JPG',
  title:'This Is Title',
  text:'This Is Text',
  rate:4,
  id:7
},
{
  img:'https://image.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg',
  title:'This Is Title',
  text:'This Is Text',
  rate:4,
  id:7
},

]
export default class OurShefs extends Component {

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
        <img  className="img-fluid img-setting card-img-top shef-image" src={service.img}   alt="..." />
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
  services.map((service)=>(
    <div className="col-sm-12 col-md-6 col-lg-4">

    <div className="card">
      <img  className="img-fluid img-setting card-img-top shef-image" src={service.img}  alt="..." />
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
  ))
}
 
         
         
        
          
        </div>
        </div>
    )

}}
import React, { Component } from "react";
import Slider from "react-slick";
import Rating from 'react-rating';


const services=[
  {
    id:1,
    img:"https://i.ibb.co/qpvMcvY/drinks7-removebg-preview.png",
    rate:5,
    title:"This is Title",
    text:"This is text"
  },
  {
    id:2,
    img:"https://i.ibb.co/SxLv4D5/drinks4-removebg-preview.png",
    rate:4,
    title:"This is Title",
    text:"This is text"
  },
  {
    id:3,
    img:"https://i.ibb.co/T24WYvn/drinks3-removebg-preview.png",
    rate:5,
    title:"This is Title",
    text:"This is text"
  },
  {
    id:4,
    img:"https://i.ibb.co/mbrq269/drinks8-removebg-preview.png",
    rate:3,
    title:"This is Title",
    text:"This is text"
  },
  {
    id:5,
    img:"https://i.ibb.co/wLDZjsT/salad6-removebg-preview.png",
    rate:5,
    title:"This is Title",
    text:"This is text"
  }
]

export default class PopularDrinks extends Component {

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
         services.map((service)=>(
          <div className="col-sm-12 col-md-6 col-lg-4">

    <div className="card">
      <img className="img-fluid img-setting card-img-top" src={service.img}  alt="..." />
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
import './FoodCard.css';
import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const FoodCard = () => {
    // rating state
    const [value, setValue] = React.useState(4);



   // React Slick
   
    return (
      <div >
        <div className="main-Card  m-auto container">
          
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="row container food-cardd rounded">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                className="img-fluid setHeight"
                src="https://i.ibb.co/wSYZNGm/food2-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center col-sm-12 col-md-6 col-lg-6">
              <div className="details">
                <h2 className="orderNow">
                  Make order now and get 10% discount!
                </h2>
                <p className="descrip">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, fugiat commodi. Minus illum earum ea ratione, iusto
                  laudantium porro libero!
                </p>

                <Typography component="legend">It's a lot of fun food</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <br />
                  <span className='priceDiscount'>Price: <del>1,500TK </del></span> <br />
                  <span className="realP"> 1,350tk</span>
                <br />
                <button className="mb-2 border-0 p-2 rounded orderNowButton">
                  Order Now
                </button>
              </div>
            </div>
          </div>
    </div>
    <div className="carousel-item">
    <div className="row container food-cardd rounded">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                className="img-fluid setHeight"
                src="https://i.ibb.co/HzgVmBV/food1-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center col-sm-12 col-md-6 col-lg-6">
              <div className="details">
                <h2 className="orderNow">
                  Make order now and get 10% discount!
                </h2>
                <p className="descrip">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, fugiat commodi. Minus illum earum ea ratione, iusto
                  laudantium porro libero!
                </p>

                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <br />
                <span className='priceDiscount'>Price: <del>500TK </del></span> <br />
                  <span className="realP"> 450TK</span>
                <br />
                <button className="mb-2 border-0 p-2 rounded orderNowButton">
                  Order Now
                </button>
              </div>
            </div>
          </div>
    </div>
    <div className="carousel-item">
    <div className="row container food-cardd rounded">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                className="img-fluid setHeight"
                src="https://i.ibb.co/hBYpKLR/bg3-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center col-sm-12 col-md-6 col-lg-6">
              <div className="details">
                <h2 className="orderNow">
                  Make order now and get 15% discount!
                </h2>
                <p className="descrip">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, fugiat commodi. Minus illum earum ea ratione, iusto
                  laudantium porro libero!
                </p>

                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <br />
                <span className='priceDiscount'>Price: <del>1,000TK </del></span> <br />
                  <span className="realP"> 850TK</span>
                <br />
                <button className="mb-2 border-0 p-2 rounded orderNowButton">
                  Order Now
                </button>
              </div>
            </div>
          </div>    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    );
};

export default FoodCard;
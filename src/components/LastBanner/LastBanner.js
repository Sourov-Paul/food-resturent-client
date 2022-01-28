import React from 'react';
import './LastBanner.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius:"10px"
  };
  
  const center = {
    lat:24.391743,
    lng:89.994827
  };
const LastBanner = () => {
    
    
   

    return (
        <div>
            <header className="zoom">
	<div className="title">
		<h1>If you want to see our Location Please Click....</h1>
	
    
    {/* bootstrap model */}
    
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
       
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

     
      <LoadScript
      googleMapsApiKey="AIzaSyDyMBxDIivosxgjC5VQdu2-_wvo-2xRLb0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>


      </div>
    
    </div>
  </div>
</div>

<a  data-bs-toggle="modal" href="#exampleModalToggle" ><a href="http://webdesignerwall.com/tutorials/how-to-add-icon-fonts-to-any-element-with-css" alt="webdesignerwall.com" ><button><b>View Our Location</b></button></a>
</a>
    </div>
</header>


        </div>
    );
};

export default LastBanner;
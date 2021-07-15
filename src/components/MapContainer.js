import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = (props) => {

  const mapStyles = {        
    height: "50vh",
    width: "50%",
    margin: 'auto',
    borderRadius: '25px',
    border: '5px solid rgb(169,169,169, 0.8)',
    marginTop: '10px'
  };

  const latitude = parseFloat(props.vehicleLatitude, 10);
  const longitude = parseFloat(props.vehicleLongitude, 10);

  const defaultCenter = {
    lat: latitude, lng: longitude
  }

  const locations = [
    {
      name: "Vehicle Location",
      location: { 
        lat: latitude,
        lng: longitude
      },
    }
  ];

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCdo-9hkGsbxEVxxXRz0An4X_5QD_kRkvs'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
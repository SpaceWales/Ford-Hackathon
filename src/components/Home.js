import React from 'react';
import ICInfo from './ICInfo';
import MapContainer from './MapContainer';
import Image from './Image'

function Home(props) {

  return (
      <div>
          <ICInfo {...props} />
          {props.vehicleInfo !== undefined && props.vehicleInfo.vehicle !== undefined && 
            <MapContainer 
              vehicleLatitude={props.vehicleInfo.vehicle.vehicleLocation.latitude}
              vehicleLongitude={props.vehicleInfo.vehicle.vehicleLocation.longitude}
            />
          }
          <Image {...props}/>
      </div>
  );
}

export default Home

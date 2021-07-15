import React from 'react';
import {Percent} from 'react-bootstrap-icons'
import {Button} from 'react-bootstrap'
import Commands from './Commands';

function ICInfo(props) {
  const vehicle = props.vehicleInfo.vehicle.vehicleDetails;
  let fuelLevel = vehicle.fuelLevel.value;
  let distanceToEmpty = vehicle.fuelLevel.distanceToEmpty;

  if (fuelLevel < 0) {
    fuelLevel = 100;
    distanceToEmpty = 426; 
  }

  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '20vw',
    position: 'absolute',
    marginTop: '15vh',
  }

  const li = {
    listStyle: 'none',
    fontSize: '20px',
    // border: '1px solid #218838',
    margin: '5px',
    borderRadius: '10px'
  }

  const ul = {
  }

  const btn = {
    width: '100%',
    height: '100%'
  }

  return (
      <div style={style}>
        <ul style={ul}>
          <li style={li}>{fuelLevel < 15 ?
           <Button style={btn} variant={"danger btn-static"}>Fuel: {fuelLevel}{<Percent/>}</Button> :
           <Button style={btn} variant={"success btn-static"}>Fuel: {fuelLevel}{<Percent/>}</Button>}</li>
          <li style={li}>{distanceToEmpty < 100 ?
           <Button style={btn} variant={"danger btn-static"}>{distanceToEmpty} Miles to Empty</Button> :
           <Button style={btn} variant={"success btn-static"}>{distanceToEmpty} Miles to Empty</Button>}</li>
          <li style={li}><Button style={btn} variant={"info btn-static"}> Mileage: {vehicle.mileage} Miles</Button></li>
          <li style={li}><Button style={btn} variant={"info btn-static"}> Odometer: {vehicle.odometer} Miles</Button></li>
          {props.vehicleInfo.vehicle !== undefined && props.vehicleStatus.vehiclestatus !== undefined && props.vehicleStatus.vehiclestatus.lockStatus !== null ?
            <li style={li}><Commands {...props} /></li> :
            <li style={li}><Button style={btn} variant={"danger"}>Commands Unavailable</Button></li>
          }
        </ul>
      </div>
  );
}

export default ICInfo;

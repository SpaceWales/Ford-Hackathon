import React from 'react';
import DoorStatus from './DoorStatus';
import TirePressure from './TirePressure';

function Vehicle(props) {
  const vehicle = props.vehicleInfo.vehicle;

  const ul = {
  }

  const li = {
    display: 'flex',
    listStyle: 'none',
    fontSize: 'calc(14px + 1vh)',
    width: '100%',
    margin: '10px',
    flexDirection: 'column'
  }

  const style={
    display:'flex',
    flexDirection:'row'
  }

  const img = {
    width: '50%',
    height: '50%'
  }

  return (
      <div style={style}>
        <ul>
          <li class={"btn btn-info btn-static"} style={li}> Make: {vehicle.make === "F" ? "Ford" : "Unknown"} </li>
          <li class={"btn btn-info btn-static"} style={li}> Model: {vehicle.modelName} </li>
          <li class={"btn btn-info btn-static"} style={li}> Year: {vehicle.modelYear} </li>
          <li class={"btn btn-info btn-static"} style={li}> Color: {vehicle.color} </li>
          <li class={"btn btn-info btn-static"} style={li}> Nickname: {vehicle.nickName} </li>
          <li class={"btn btn-success btn-static"} style={li}> <TirePressure {...props}/> </li>
          <li class={"btn btn-success btn-static"} style={li}> <DoorStatus {...props} /> </li>
        </ul>
        <img style={img} src={props.fullImg} alt="fullsizeImg"/>
      </div>
  );
}

export default Vehicle;

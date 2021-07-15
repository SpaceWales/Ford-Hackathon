import React, { useState } from 'react'
import {Button} from 'react-bootstrap';

const Account = (props) => {

    const vehicle = props.vehicleInfo.vehicle;

    const sidebar = {
        width: '20%',
        position: 'absolute'
    }

    const sidebarBtn = {
        width: '100%',
        margin: '10px',
    }

    const header = {
        textAlign: 'center'
    }

    const container = {
        display: 'flex',
        flexDirection: 'column',
        height: '75vh'
    }

    const infoBox = {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        border: '1px solid darkGrey',
        borderRadius: '5px'
    }

    const dataStyle = {
        marginLeft: '15px',
        marginTop: '15px'
    }

    const [toggleInfo, setToggleInfo] = useState(false)
    const [toggleVehicle, setToggleVehicle] = useState(false)
    const [toggleWarranty, setToggleWarranty] = useState(false)

    const toggle = (btn) => {
        if(btn === "i"){setToggleVehicle(false);setToggleWarranty(false)}
        if(btn === "v"){setToggleInfo(false);setToggleWarranty(false)}
        if(btn === "w"){setToggleInfo(false);setToggleVehicle(false)}
    }

    return (
        <div style={container}>
            <h3 style={header}>Welcome, {props.data.FirstName} {props.data.LastName}</h3>
            <div style={sidebar}>
                <Button style={sidebarBtn} onClick={() => {setToggleInfo(!toggleInfo);toggle("i")}} variant={"info"}>Information</Button>
                <Button style={sidebarBtn} onClick={() => {setToggleVehicle(!toggleVehicle);toggle("v")}} variant={"info"}>Vehicle</Button>
                <Button style={sidebarBtn} onClick={() => {setToggleWarranty(!toggleWarranty);toggle("w")}} variant={"info"}>Warranty</Button>
            </div>
            <div style={infoBox}>
                {toggleInfo ? 
                    <div style={dataStyle}>
                        <h4>Basic Info</h4>
                        <p>Name: {props.data.FirstName} {props.data.LastName}</p>
                        <p>Date of birth: {props.data.DOB}</p>
                        <p>Phone Number: {props.data.PhoneNumber}</p>
                        <p>Email: {props.data.Email}</p>
                    </div> : null}
                {toggleVehicle ? 
                    <div style={dataStyle}>
                        <h4>Vehicle Information</h4>
                        <p>Make: {vehicle.make === "F" ? "Ford" : "Unknown"}</p>
                        <p>Model: {vehicle.modelName}</p>
                        <p>Year: {vehicle.modelYear}</p>
                        <p>Color: {vehicle.color}</p>
                        <p>Engine: {vehicle.engineType === "ICE" ? "Internal Combustion Engine" : "Electric Vehicle"}</p>
                    </div> : null}
                {toggleWarranty ? 
                    <div style={dataStyle}>
                        <h4>Warranty Information</h4>
                        <p>Start: {props.data.Warranty.Start}</p>
                        <p>End: {props.data.Warranty.End}</p>
                        <p>Mileage: {props.data.Warranty.Mileage}</p>
                        <p>Year: {props.data.Warranty.Year}</p>
                    </div> : null}
            </div>
        </div>
    )
}

export default Account

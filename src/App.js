import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Vehicle from './components/Vehicle';
import { getRefreshToken, getVehicleInfo, getVehicleStatus,
   postVehicleStatus, getThumbnailImg, getFullsizeImg } from './services/services'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Footer from './components/Footer';
import AcctData from './AccountData.json'
import Account from './components/Account'

function App() {

  const [token, setToken] = useState({});
  const [vehicleInfo, setVehicleInfo] = useState({});
  const [bearer, setBearer] = useState('')
  const [postStatus, setPostStatus] = useState({})
  const [getStatus, setGetStatus] = useState({ vehiclestatus: { lockStatus: {} } })
  const [showApiData, setShowApiData] = useState(false)
  const [loggedIn,setLogin] = useState(false)
  const [thumbnail,setThumbnail] = useState()
  const [fullImg,setFullImg] = useState()

  useEffect(() => {
    let mounted = true;

    getRefreshToken()
      .then(token => {
        if (mounted) {
          setToken(token)
          setBearer(token.access_token)
        }
      })

    if (token.access_token !== undefined) {
      getVehicleInfo(bearer)
        .then(vehicle => {
          if (mounted) {
            setVehicleInfo(vehicle)
          }
        })

      postVehicleStatus(bearer)
        .then(status => {
          if (mounted) {
            setPostStatus(status)
          }
        })

      if (postStatus.commandId !== undefined) {
        getVehicleStatus(bearer, postStatus.commandId)
          .then(status => {
            if (mounted) {
              setGetStatus(status)
              // lockStatusBypass()
            }
          })
        
      }

      getThumbnailImg(bearer)
      .then(img => {
        if(mounted) {
          setThumbnail(URL.createObjectURL(img))
        }
      })

      getFullsizeImg(bearer)
      .then(img => {
        if(mounted) {
          setFullImg(URL.createObjectURL(img))
        }
      })

    }
    return () => { mounted = false }
  }, [bearer, getStatus.commandStatus, postStatus.commandStatus, postStatus.vehiclestatus])

  function clickRefreshVehicle() {
    getVehicleInfo(bearer)
      .then(response => {
        setVehicleInfo(response)
      })
  }

  function loadingLogin() {
    let delay = true;
    while(delay){
      if(postStatus !== undefined){
        //delay is to help with google maps loading
        setTimeout(setLogin,3500,true); 
        delay = false;
      }
    }
  }

  // function lockStatusBypass() {
  //   if(getStatus.vehiclestatus.lockStatus == undefined ||
  //      getStatus.vehiclestatus.lockStatus == null) {  
  //     setGetStatus((prevState) => ({
  //       ...prevState,
  //       [getStatus.vehiclestatus.lockStatus.value] : ["PENDING"]
  //     }))
  //   }
  // }
  
  function refreshStatus() {
    postVehicleStatus(bearer)
      .then(status => {
        setPostStatus(status)
      })

    while (postStatus.commandId === undefined) {

    }

    getVehicleStatus(bearer, postStatus.commandId)
      .then(status => {
        setGetStatus(status)
      })
  }

  return (
    <div>
      {!loggedIn ? <Login loginClicked={loadingLogin} /> : 
        <BrowserRouter>
          <div>
            <Header/>
            {vehicleInfo.vehicle !== undefined &&
              <Route exact path="/" render={() => <Home refreshStatus={refreshStatus} vehicleInfo={vehicleInfo} vehicleStatus={getStatus} thumbnail={thumbnail} token={token.access_token} />} />
            }
            {vehicleInfo.vehicle !== undefined &&
              <Route exact path="/vehicle" render={() => <Vehicle vehicleInfo={vehicleInfo} fullImg={fullImg} />} />
            }
            {vehicleInfo.vehicle !== undefined &&
              <Route exact path="/account" render={() => <Account data={AcctData} vehicleInfo={vehicleInfo} />} />
            }
            
            <Footer vehicleInfo={vehicleInfo} postStatus={postStatus}  getStatus={getStatus} token={token.access_token}/>
            
            
          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App

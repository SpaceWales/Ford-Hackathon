import React, { useEffect, useState } from 'react';
import { unlockVehicle, lockVehicle } from '../services/services'
import { Button } from 'react-bootstrap';

function Commands(props) {

  const [lockStatus, setLockStatus] = useState(props.vehicleStatus.vehiclestatus.lockStatus.value === "LOCKED");
  const [locking, setLocking] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    setLockStatus(props.vehicleStatus.vehiclestatus.lockStatus.value === "LOCKED");
    setLocking(false);
    setUnlocking(false);
  }, [props.vehicleStatus.vehiclestatus.lockStatus]);
 

  function toggleLockVehicle() {
    if (lockStatus) {
      setUnlocking(true);
      unlockVehicle(props.token)
      .then(response => {
        setTimeout(props.refreshStatus,2500,true);
      })
    } else {
      setLocking(true);
      lockVehicle(props.token)
      .then(response => {
        setTimeout(props.refreshStatus,2500,true);
      })
    }
  }

  return (
    <div>
      {!locking && !unlocking &&
        <Button style={{ width:"100%", height:"100%" }} variant="success" onClick={() => toggleLockVehicle()}> {lockStatus ? "Unlock" : "Lock"} </Button>
      }
      {locking &&
        <Button style={{ width:"100%", height:"100%" }} variant="success">Locking...</Button>
      }
      {unlocking && 
        <Button style={{ width:"100%", height:"100%" }} variant="success">Unlocking...</Button>
      }
    </div>
  );
}

export default Commands;

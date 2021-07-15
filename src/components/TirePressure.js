import React, { useState, useRef } from 'react';
import { Tooltip, Button, Overlay } from 'react-bootstrap';
import { CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

function TirePressure(props) {
    const tirePressureWarning = props.vehicleInfo.vehicle.vehicleStatus.tirePressureWarning;
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
         <Button variant={tirePressureWarning ? "danger" : "success"} ref={target} onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)}>
            Tire Pressure {tirePressureWarning ? <ExclamationTriangleFill /> : <CheckCircleFill />}
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay" {...props}>
                {tirePressureWarning ? 
                  "Tire pressure warning!" : 
                  "Tires are in good condition!"
                }
              </Tooltip>
            )}
          </Overlay>
      </>
    );
  }
  
  export default TirePressure;
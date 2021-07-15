import React, { useState, useRef, useEffect } from 'react';
import { Tooltip, Button, Overlay } from 'react-bootstrap';
import { CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons';

function DoorStatus(props) {
    const [doors] = useState(props.vehicleInfo.vehicle.vehicleStatus.doorStatus);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [openDoors, setOpenDoors] = useState([]);
    const [buttonColor, setButtonColor] = useState("");
    const [buttonText, setButtonText] = useState([]);
    const [tooltipText, setTooltipText] = useState("");

    useEffect(() => {
        setOpenDoors(() => {
          return doors.filter((door) => {return door.value !== "CLOSED"});
        });
    }, [doors]);

    useEffect(() => {
      if (openDoors.length) {
        setButtonColor("danger");
        setButtonText([`${openDoors.length} ${openDoors.length === 1 ? "door" : "doors"} open `, <ExclamationTriangleFill />]);
        setTooltipText("All doors are not closed!");
      }
      else {
        setButtonColor("success");
        setButtonText(["All doors closed ", <CheckCircleFill />]);
        setTooltipText("All doors are closed!");
      }
    }, [openDoors]);

    return (
      <>
         <Button variant={buttonColor} ref={target} onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)}>
            {buttonText}
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay" {...props}>
                {tooltipText}
              </Tooltip>
            )}
          </Overlay>
      </>
    );
  }
  
  export default DoorStatus;
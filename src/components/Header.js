import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Model_T from './resources/modelT.png'
import FordIcon from './resources/icon.png'


function Header() {

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const logos = {
    height: '75px',
    width: '75px'
  }

  const head = {
  }


  return (
    <div style={head}>
      <nav style={navStyle}>
        <img style={logos} src={FordIcon} alt="Ford Icon" />
        <Link to={"/"}><Button variant="primary">Ford Connect</Button></Link>
        <Link to={"/vehicle"}><Button variant="primary">Vehicle Status</Button></Link>
        <Link to={"/account"}><Button variant="primary">Account</Button></Link>
        <img style={logos} className="logos" src={Model_T} alt="Model T" />
      </nav>

      <hr />
    </div>
  );
}

export default Header

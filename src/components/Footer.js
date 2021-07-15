import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'

function Footer(props) {

  const [showApiData, setShowApiData] = useState(false)


  const footerBox = {
    position: 'absolute',
    height: 'min(15%, 250px)',
    width: '100%',
    bottom: '0',
    clear: 'both',
    borderTop: '1px solid rgb(169,169,169)',
    display: 'flex',
  }

  const scrollWindow = {
    width: '70%',
    height: '100%',
    overflow: 'scroll',
    borderLeft: '1px solid rgb(169,169,169)',
    flexGrow: 1,
  }

  const btn = {
    height: 'min(75%, 50px)',
    width: '50%',
    marginLeft: '25%',
    textAlign: 'center',
    lineHeight: '100%',
    justifyContent: 'center'
  }

  const sidebar = {
    width: '30%',
    height: '100%',
    overflow: 'scroll'
  }

  const ul = {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }

  return (
    <div style={footerBox}>
      <div style={sidebar}>
        <h4>Brought to you by Team Tech Connect</h4>
        <ul style={ul}>
          <li>Ryan Khzouz</li>
          <li>Phil Pomante</li>
          <li>Rasul Rasulov</li>
          <li>William Wales</li>
          <li>James Worthington</li>
        </ul>

      </div>

      <div style={scrollWindow}>
      <Button style={btn} onClick={() => { setShowApiData(!showApiData) }} variant={"dark"}>
        {!showApiData ? "Show API data" : "Hide API data"}</Button>
        {showApiData ?
          <div>
            {/* <button
                  onClick={() => clickRefreshVehicle()}
                > Get Refresh Token </button> */}
            <h5>Post</h5>
            <pre><code>{JSON.stringify(props.postStatus, null, 2)}</code></pre>
            <h5>Get</h5>
            <pre><code>{JSON.stringify(props.getStatus, null, 2)}</code></pre>
            {/*<pre><code>{JSON.stringify(props.getStatus.vehiclestatus, null, 2)}</code></pre>*/}
            <h5>Token</h5>
            <pre><code>{JSON.stringify(props.token, null, 2)}</code></pre>
            <pre><code>{JSON.stringify(props.vehicleInfo, null, 2)}</code></pre>
          </div>
          : null

        }</div>
    </div>

  )
}
export default Footer
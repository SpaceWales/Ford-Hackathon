import React from 'react'
import icon from './resources/speed.gif'

const Loading = () => {

    const divStyle = {
        'width': '25vw',
        'height': '25vh',
    }

    const iconStyle = {
        'display': 'block',
        'marginTop': '45vh',
        'marginLeft': 'auto',
        'marginRight': 'auto',
    }

    return (
        <div style={divStyle} className='container'>
            <img style={iconStyle} id='icon' src={icon} alt='loading...' />
        </div>
    )
}

export default Loading

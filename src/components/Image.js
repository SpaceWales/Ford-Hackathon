import React from 'react'

const Image = (props) => {

    //this can be adjusted as needed
    const imgStyle = {
        position: 'relative',
        marginLeft: '77vw',
        marginTop: '-60vh'
    }

    return (
        <div>
            <img style={imgStyle} alt="ford" src={props.thumbnail}/>
        </div>
    )
}

export default Image

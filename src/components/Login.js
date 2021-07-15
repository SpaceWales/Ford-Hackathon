import React, {useState} from 'react'
import Loading from './Loading'

const Login = (props) => {

    const [loading,setLoading] = useState(false)

    const divStyle = {
        'textAlign': 'center',
        'width': '100vw',
        'height': '50vh',
        'marginTop': '25vh'
    }

    const buttonStyle = {
        'margin': '0',
        'position': 'absolute',
        'top': '50%',
        'left': '50%'
    }

    const wrapperFunction = () => {
        toggleLoading();
        handleClick();
    }

    const handleClick = (event) => {
        props.loginClicked(event)
    }

    const toggleLoading = () => {
        setLoading(!loading)
    }



    return (
        <div style={divStyle} className='btn-container'>
            {!loading ? 
                <div>
                    <h1>Tech Connect - Ford Hackathon</h1>
                    <button
                        style={buttonStyle}
                        className='btn btn-dark'
                        onClick={wrapperFunction}
                    >Login</button>
                </div>
                : <Loading/>
            }
        </div>
    )
}

export default Login

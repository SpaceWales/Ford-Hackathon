const vehicleID = "8a7f9fa878849d8a0179579d2f26043a"
const applicationID = "afdc085b-377a-4351-b23e-5e1d35fb3700"
const baseURL = "https://api.mps.ford.com/api/fordconnect/vehicles/v1/"

export function getRefreshToken() {
    const tokenURL = "https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common";
    return fetch(tokenURL, {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'refresh_token',
            'refresh_token': 'eyJraWQiOiI2cjIzQ2FTeTF4cFdUUFBxYVRtX01Vc2RKZGo1RWlDTnRtME4yVTAxNTdFIiwidmVyIjoiMS4wIiwiemlwIjoiRGVmbGF0ZSIsInNlciI6IjEuMCJ9.jz5xMttGdSP_7vg87lSe47t7B3rXuEMfZV9H-x4J4mV5tHUuRVkhNY1xFPJBGkOOgIHnKFxkPgsrTnvdMs7qNpd3w4ShmIHQCaHuzd7-nLQGHc6VB5fuZToTpbdHqJEMlqpsRPS59XWxsDSwnR_wrDIsHxhWtM3skh4toAinKOeAuow1ir_CmflFqKOwaK1j01uqFSkZC-4yDqoJyXtb7dc12CuHl9J0e5ME_O8AtWxNuKRT2c0Xmjd2o8YWrIxY5v28rGo8JSnOyZ4_SN14Y8diRgl4M6iBrVUD1VHAVs1NJliJSlABi9ivzqQAMYQ11qAtJqPH2Uqpqx3e7JXe1g.W0VeHhdPUgk56yN5.figlTGwu7O1mgH1tjBifg4zktYnRBIi6WtpaES6SWGTjbh0xi-o5WQ4mptBFWuFGX0yIqUHmvXwhq6WUVdL_M_41EOEEnZVaYn9nhsd16l52c1cSzMGfDx6yeZVzvht8Rvqje8bc4IDLPUro7gH-1URXUPN5dDZyIbVn4-EFwXxKNIE5VcaqqCc8etTmhBoWL3-puysxWKO_7CG2fIRMRvKWaWzwfq4YcjdwaUPa9I2uQWTAkBF4Lp21eH_XQgKvQoe-2qAwfmLFgWVIr7XsR5Fzz-azHht8Z0-JzRORDrnie-Y-Rio-YHxfQHgsIbQ_IWBM2C-QAWA33VHGir9uXEKTEv5QcCvW3i4Z9ESON_CfvyYtcp7FngbenozqJ_lFF9BAmDtv3Y5hc4hQAZh9c-iPLiiiVcDBVwcArd0zjqE32wl3jKgORdhZeJeFj0rCVKTLttThYBZxqTH9n-bhDXbUEA0zNVNaw_31ZhV0a-btnbPymWGLucfTXTnGYXLmEs6NErU64uHHovV04f0kEq-7l8GdfYpJ5PdMokCoD7hbmKWFL1MGQhz_W8pSpGaXCqNgx9mKBIw9N4zt4827jNNyK9DyX_daVgnVTCAo9qR-0VREidbrZgs918nSw5agp15vVzY8_tSxSzbSjnbCByAHG40yONnkCaKqQAfXxjw0-5DOjgMgXbdrm5yKGMIzWVJcewyFpHJcFhsNV3d_oROLmblEU0mjmNDSTwrvoF1-Q1h1nvyZ3y8TNV4zb7Pc6f12I2d0OeZc4PKhimCNmQ2OrCAcvgm9ZMir10XJde-sVZ-sSYAYa9Jb02ss1Eet9XWVWX3EvxIOQU0wrA-I-4eZ.ykt4kzFMyoUenOpEEUWT9w',
            'client_id': '30990062-9618-40e1-a27b-7c6bcb23658',
            'client_secret': 'T_Wk41dx2U9v22R5sQD4Z_E1u-l2B-jXHE',
        })
    })
        .then(response => response.json())
        .catch((error) => {
            alert(`error: ${error.message}`);
        })
}

export function getVehicleInfo(obj) {

    let bearer = "";
    if(obj !== undefined){
        bearer = obj;
    }

    return fetch(baseURL + vehicleID,  {
        method: 'GET',
        headers: {
            'Application-Id': applicationID,
            'Authorization': `Bearer ${bearer}`,
            'api-version': '2020-06-01'
        }
    })
        .then(data => data.json())
        .catch((error) => {
            alert(`error: ${error.message}`);
        })

}

export function unlockVehicle(obj) {

    let bearer = "";

    if(obj !== undefined){
        bearer = obj;
    }

    return fetch(baseURL + vehicleID + "/unlock",  {
        method: 'POST',
        headers: {
            'Application-Id': applicationID,
            'Authorization': `Bearer ${bearer}`,
            'api-version': '2020-06-01'
        }
    })
    .then(data => data.json())
    .catch((error) => {
        alert(`error: ${error.message}`);
    })
}

export function lockVehicle(obj) {

    let bearer = "";
    if(obj !== undefined){
        bearer = obj;
    }

    return fetch(baseURL + vehicleID + "/lock",  {
        method: 'POST',
        headers: {
            'Application-Id': applicationID,
            'Authorization': `Bearer ${bearer}`,
            'api-version': '2020-06-01'
        }
    })
    .then(data => data.json())
    .catch((error) => {
        alert(`error: ${error.message}`);
    })
}


export function postVehicleStatus(access_token) {

    const postVehicleStatusBody = {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Application-Id': applicationID,
            'Authorization': `Bearer ${access_token}`,
            'api-version': '2020-06-01',
        }
    }

    return fetch(baseURL + `${vehicleID}/status`, postVehicleStatusBody)
        .then(response => response.json())
        .catch((error) => {
            alert(`error: ${error.message}`);
        })
}

export function getVehicleStatus(access_token, command_id) {

    const getVehicleStatusBody = {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Application-Id': applicationID,
            'Authorization': `Bearer ${access_token}`,
            'api-version': '2020-06-01',
        }
    }

    return fetch(baseURL + `${vehicleID}/statusrefresh/${command_id}`, getVehicleStatusBody)
    .then(response => response.json())
    .catch((error) => {
        alert(`error: ${error.message}`);
    })
}

export function getThumbnailImg(access_token) {
    
    const getThumbnailBody = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Application-Id': applicationID,
            'Authorization': `Bearer ${access_token}`,
            'api-version': '2020-06-01',
        }
    }

    //TODO replace make-model-year with data passed in from vehicle info call
    return fetch(baseURL + `${vehicleID}/images/thumbnail?make=Ford&model=&year=2019`, getThumbnailBody)
    .then(response => response.blob())
    .catch((error) => {
        alert(`error: ${error.message}`);
    })
}


export function getFullsizeImg(access_token) {
    
    const getFullImgBody = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Application-Id': applicationID,
            'Authorization': `Bearer ${access_token}`,
            'api-version': '2020-06-01',
        }
    }

    //TODO replace make-model-year with data passed in from vehicle info call
    return fetch(baseURL + `${vehicleID}/images/full?make=Ford&model=&year=2019`, getFullImgBody)
    .then(response => response.blob())
    .catch((error) => {
        alert(`error: ${error.message}`);
    })
}
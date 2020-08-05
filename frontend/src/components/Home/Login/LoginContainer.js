import React, { useState } from 'react'
import auth from '../CommonComponents/Auth'
import HeaderHome from '../CommonComponents/HeaderHome';
import Login from './Login';
import SignUp from './SignUp';
import Button from 'react-bootstrap/Button'
const LoginContainer = props => {
    const [loginSelected, setLoginSelected] = useState(true)

    let selectedComponentUI
    if (loginSelected) {
        selectedComponentUI = <Login routeHistory={props.history} />
    } else {
        selectedComponentUI = < SignUp routeHistory={props.history} />
    }

    function setMenuSelected(selected) {
        console.log('selected ', selected)
        setLoginSelected(selected)
    }

    return (
        <div style={{  background:'linear-gradient(157deg, #ffffff, #808080)'}}>
            <HeaderHome />
            <br /> <br />
            {/* <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} onClick={() => { auth.login(() => { bypassLogin(props, 'superadmin') }); }}>Bypass Super Admin Login</Button>{' '} &nbsp;&nbsp;
            <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} onClick={() => { auth.login(() => { bypassLogin(props, 'brandManagerRole') }); }}>Bypass Admin Login</Button>{' '} &nbsp;&nbsp;
            <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} onClick={() => { auth.login(() => { bypassLogin(props, 'retailOwnerRole') }); }}>Bypass Consumer Login</Button>{' '}&nbsp;&nbsp; */}


            

            <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} onClick={() => setMenuSelected(true)}>Login</Button>&nbsp;&nbsp;
            <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} onClick={() => setMenuSelected(false)}>SignUp Now</Button>

            <br /> <br />

            {selectedComponentUI}
            <br /> <br />
       
        </div>

    )

    function bypassLogin(props, loginType) {

        let email = 'vidyacmendon@gmail.com'
        if ('superadmin' === loginType) {
            email = 'superadmin@gmail.com'
        } else if ('brandManagerRole' === loginType) {
            email = 'dabur@gmail.com'
        }

        const requestObject = {
            "email": email,
            "password": "test"
        }
        auth.userEmail = requestObject.email;

        let responseObj = {}
        fetch('/api/authenticate/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    props.history.push("/");
                }
                console.log(data[0].role)
                responseObj = data[0];
                if ('retailOwnerRole' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/retailDashboard");
                } else if ('brandManagerRole' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/brandDashboard");
                } else if ('superadmin' === data[0].role) {
                    auth.authenticated = true;
                    props.history.push("/superAdminDashboard");
                } else {
                    props.history.push("/");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}


export default LoginContainer

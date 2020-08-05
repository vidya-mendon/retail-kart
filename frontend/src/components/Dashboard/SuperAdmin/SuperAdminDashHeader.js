import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../Home/CommonComponents/Auth'
import Button from 'react-bootstrap/Button'
const SuperAdminDashHeader = (props) => {
    return (
        <div style={{ background: '#0000CC',padding:'20px'}}>

            <Button style={{ backgroundColor: '#fff'}}><Link exact to="/superAdminDashboard/getAllUsers" style={{ color: '#0341AC' }}>Get Users</Link></Button>&nbsp;&nbsp;

            <Button style={{ backgroundColor: '#fff'}}><Link exact to="/superAdminDashboard/addUser" style={{ color: '#0341AC' }}>Add Users</Link></Button>  &nbsp;&nbsp;

            <Button style={{ backgroundColor: '#fff'}}><Link exact to="/superAdminDashboard/modifyUser" style={{ color: '#0341AC' }}>Modify Users</Link></Button>&nbsp;&nbsp;

            <Button style={{ backgroundColor: '#fff'}}><Link exact to="/superAdminDashboard/deleteUser" style={{ color: '#0341AC' }}>Delete Users</Link></Button>&nbsp;&nbsp;


            <Button onClick={() => { auth.logout(() => { props.logout.push("/"); }); }}>Logout</Button>

            <br /><br />

        </div>
    )
}

export default SuperAdminDashHeader

import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from '../../../Home/asset/logo.PNG'

const RetailerDashHeader = (props) => {
    return (
        <div>

            <Navbar style={{'background-color': '#0000CC',padding:'10px'}}>
            <Navbar.Brand href="#home"style={{ color:'#fff' }}><img src={logo} alt="" className="" width='100px' height='60px'></img></Navbar.Brand>
                <Nav className="mr-auto">
                <Link exact to="/retailDashboard/home"><Nav.Link href="#home" style={{ color:'#fff',fontStyle:'italic' }}>Home</Nav.Link></Link>
                    <Link exact to="/retailDashboard"><Nav.Link href="#product" style={{ color:'#fff',fontStyle:'italic' }}>Product</Nav.Link></Link>
                    <Link to="/retailDashboard/myOrders"> <Nav.Link href="#features" style={{ color:'#fff',fontStyle:'italic' }}>My Orders</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }} style={{fontStyle:'italic'}}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default RetailerDashHeader

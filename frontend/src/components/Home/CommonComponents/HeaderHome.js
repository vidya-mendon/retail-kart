import React from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../asset/logo.PNG'

const HeaderHome = () => {
    return (
        <div>
            <Navbar style={{'background-color': '#0000CC',padding:'10px'}}>
                <Navbar.Brand href="#home"style={{ color:'#fff' }}><img src={logo} alt="" className="" width='100px' height='60px'></img></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link exact to="/"><Nav.Link href="#home" style={{ color:'#fff',fontSize:'20px',fontStyle:'italic' }}>Home</Nav.Link></Link>
                    <Link to="/about"> <Nav.Link href="#features" style={{ color:'#fff',fontSize:'20px',fontStyle:'italic' }}>About</Nav.Link></Link>
                    <Link to="/contact"> <Nav.Link href="#contact" style={{ color:'#fff',fontSize:'20px',fontStyle:'italic' }}>ContactUs</Nav.Link></Link>
                    <Link to="/services"> <Nav.Link href="#services" style={{ color:'#fff',fontSize:'20px',fontStyle:'italic' }}>Service</Nav.Link></Link>
                    <Link to="/login"><Nav.Link href="#pricing" style={{ color:'#fff',fontSize:'20px',fontStyle:'italic' }}>Login</Nav.Link></Link><br />
                    
                </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderHome

import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{ background:'linear-gradient(157deg, #ffffff, #808080)'}}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://alipartnership.com/wp-content/uploads/2016/02/1_easy-ecommerce-solution.png" /></Col>
                        <Col>
                            <br /><br /><br /><br /><br /><br />
                            <marquee>
                            <h1 style={{ color:'#fff',fontStyle:'italic'}}>Welcome to</h1>
                            </marquee>
                            
                            <h2 style={{ color:'#fff',fontStyle:'italic'}}>Brand Dashboard </h2>
                    
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;

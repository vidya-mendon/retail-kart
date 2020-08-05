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
                            <h1 style={{ color:'#fff',fontStyle:'italic'}}>Bridging Brands to Retailers</h1>
                            </marquee>
                            
                            <p style={{ color:'#fff',fontStyle:'italic'}}> Solving the ground level issue of preordering items from brands directly. Making restocking inventory as seamless as possible</p>
                            <p><Button href='/login' style={{ backgroundColor:'#fff',color:'#0341AC' }}>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;

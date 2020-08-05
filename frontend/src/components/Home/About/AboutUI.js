import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

const AboutUI = () => {
        return (
            <Jumbotron style={{ background:'linear-gradient(157deg, #ffffff, #808080)'}}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://alipartnership.com/wp-content/uploads/2016/02/1_easy-ecommerce-solution.png" /></Col>
                        <Col>
                            <br /><br />
                            <h2 style={{ color:'#fff',fontStyle:'italic'}}>About Us</h2>
                <p style={{ color:'#fff',fontStyle:'italic' }}>
                    Retailkart is a site where Brandss can easily connect with Retailerss .
                    Brands can list all their products at this one stop solution.They can give the number of retailers required to purchase their products.
                    Retailerss can choose which brands they want to purchase. 
                </p>
                <p style={{ color:'#fff',fontStyle:'italic'}}>
                    Retailkart has a very intuitive UI. You can just select a product . Check the details.
                    Everything works in a seamless way.Here retailers can directly connect with brands and purchase required product.
                </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }


export default AboutUI



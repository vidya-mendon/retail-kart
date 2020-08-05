import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

const ContactUI = () => {
        return (
            <Jumbotron style={{ background:'linear-gradient(157deg, #ffffff, #808080)'}}>
                <center><h4 style={{fontSize:'50px',fontStyle:'italic',color:'#0000CC'}}>Services</h4><br/></center>
                <br/>
                <Container>
                    <Row>
                    
                    <Col>
                    <h1 style={{fontSize:'25px',fontStyle:'italic',color:'#0000CC'}}>Raise Ticket</h1>
                    <div className="service_icon delay-03s animated wow  zoomIn animated">
                      {" "}
                      <span>
                        <i className="fa fa-truck fa-3x" style={{color:'#006400',fontSize:'50px'}}></i>
                      </span>{" "}
                    </div>
                    <p className="animated zoomIn wow animated" style={{fontSize:'15px',fontStyle:'italic',color:'#0000CC'}}>
                     Here you can get goods Services.
                     And on time delivary</p>
                   </Col>
                <Col>
                <h1 style={{fontSize:'25px',fontStyle:'italic',color:'#0000CC'}}>24 X 7 Service</h1>
                <div className="service_icon icon2  delay-03s animated wow zoomIn animated">
                      {" "}
                      <span>
                        <i className="fa fa-clock-o fa-3x" style={{color:'#006400',fontSize:'50px'}}></i>
                      </span>{" "}
                    </div>
                    <p className="animated fadeInDown wow animated" style={{fontSize:'15px',fontStyle:'italic',color:'#0000CC'}}>
                     We are giving any time sevices if you want.
                     We are giving 24x7 hour sevices for the users.
                    </p>
                </Col>
                <Col>
                <h1 style={{fontSize:'25px',fontStyle:'italic',color:'#0000CC'}}>Festival Offres</h1>
                <div className="service_icon icon3  delay-03s animated wow zoomIn animated">
                      {" "}
                      <span >
                        <i className="fa fa-gift fa-3x" style={{color:'#006400',fontSize:'50px'}} ></i>
                      </span>{" "}
                    </div>
                    <p className="animated fadeInDown wow animated" style={{fontSize:'15px',fontStyle:'italic',color:'#0000CC'}}>
                      Here you have different festival offers.
                      And you get  different gift voucher.
                      And 10% discount in every puchaces.

                    </p>
                </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }


export default ContactUI
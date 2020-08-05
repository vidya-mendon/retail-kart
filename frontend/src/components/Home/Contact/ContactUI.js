import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

const ContactUI = () => {
        return (
            <Jumbotron style={{ background:'linear-gradient(157deg, #ffffff, #808080)'}}>
                <Container>
                    <Row>
                    
                    <Col style={{ color:'#00000' }}>
                    <br/><br/><br/>
                    <h4 style={{fontSize:'50px',fontStyle:'italic'}}>Contact Us</h4><br/>
                    <p style={{fontSize:'20px',fontStyle:'italic'}}>Vidya <br></br>
                        MCA Final Year<br></br>
                        NMAMIT , Nitte<br></br>
                        <strong>Phone:</strong> +91 849 693 7275<br></br>
                        <strong>Email:</strong> vidyacmendon@gmail.com<br></br>
                    </p>
                    <Row>
                  <Col>
                    <a href="#" className="twitter"  style={{color:'#00000' ,fontSize:'20px'}}>
                    <i className="fa fa-twitter"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="facebook" style={{color:'#00000' ,fontSize:'20px'}}>
                    <i className="fa fa-facebook"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="instagram" style={{color:'#00000' ,fontSize:'20px'}}>
                    <i className="fa fa-instagram"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="google-plus" style={{color:'#00000' ,fontSize:'20px'}}>
                        <i className="fa fa-google-plus"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="linkedin" style={{color:'#00000' ,fontSize:'20px'}} >
                        <i className="fa fa-linkedin"></i>
                    </a>
                  </Col>
              
            </Row>
                </Col>
                <Col> <img
                            src="https://alipartnership.com/wp-content/uploads/2016/02/1_easy-ecommerce-solution.png" />
                            </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }


export default ContactUI
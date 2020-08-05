import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})

    const onChange = (e) => {

        console.log(e.target.value);

        setBookingInfo({ "selectedQuantity": e.target.value, "finalPrice": e.target.value * props.location.projectData.brandPrice })
    }

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card >
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff', backgroundColor:'rgb(128,128,128)' }}>
                            <br />

                            <Card.Body>
                                <Card.Text style={{ color:'#fff' }}>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.brandName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' ,fontStyle:'italic'}}> brandCategory : {props.location.projectData.brandCategory}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}>brandLocation Name : {props.location.projectData.brandLocation}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' ,fontStyle:'italic'}}>brandPrice: {props.location.projectData.brandPrice}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' ,fontStyle:'italic'}}>brandContactEmail: {props.location.projectData.brandContactEmail}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' ,fontStyle:'italic'}}>brandContactInfo: {props.location.projectData.brandContactInfo}</Row>

                                    <br />

                                    <Form>

                                        <Form.Group controlId="numberOfHeads" onChange={onChange}>
                                            <Form.Label style={{fontStyle:'italic'}}>Quantity to Order</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number of Quantity" name="numberOfHeads" />
                                        </Form.Group>

                                        <br /> <br /> <br />
                                        {/* <Button variant="primary" type="submit">
                                            Calculate
                             </Button> */}
                                    </Form>

                                    <h2 style={{fontStyle:'italic'}}> Final Price : {bookingInfo.finalPrice}</h2>

                                    <Row style={{fontStyle:'italic'}}>Product Details
                                         <Link to={{
                                            pathname: '/retailDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: bookingInfo

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Check Out</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

}

export default DetailsComponent

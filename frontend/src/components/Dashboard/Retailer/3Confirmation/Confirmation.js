import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div style={{background:'linear-gradient(157deg, #ffffff, #808080)',padding:'20px'}}>
            <center>
                <Card style={{ width: '48rem', backgroundColor: 'rgb(128,128,128)' }}><Card.Body>
                    <Card.Title style={{ color:'#fff',fontStyle:'italic' }}>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col style={{ color:'#fff' }}>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.brandName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}> brandCategory : {props.location.projectData.brandCategory}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}>brandLocation Name : {props.location.projectData.brandLocation}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}>brandPrice: {props.location.projectData.brandPrice}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}>brandContactEmail: {props.location.projectData.brandContactEmail}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px',fontStyle:'italic' }}>brandContactInfo: {props.location.projectData.brandContactInfo}</Row>


Booked Quantity : {props.location.bookingInfo.selectedQuantity} <br />
Final Price : {props.location.bookingInfo.finalPrice} <br />

                        </Col>
                    </Row>
                    <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} ><Link to='/retailDashboard/paymentsGateway' style={{ color: '#0341AC' }} onClick={confirmBookingAtServer}>Confirm Order</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "selectedQuantity": props.location.bookingInfo.selectedQuantity,
                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation

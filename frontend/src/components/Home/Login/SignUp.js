import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <div>
            <center>
            <Row>
    
    <Col>
                <Card style={{ width: '22rem', backgroundColor: 'rgb(128,128,128)' }}>   <br />
                    <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" style={{ width: '5rem', }} />
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicSignupFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" name="name" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Form.Group controlId="formBasicSignupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                            </Form.Group>
                            {errors.email && errors.email.message}
                            <Form.Group controlId="formBasicSignupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <select name="role" ref={register({ required: true })}>
                                <option value="retailOwnerRole">Retailers</option>
                                <option value="brandManagerRole">Brands</option>
                                <option value="superadmin">SuperAdmin</option>
                            </select>
                            <br /> <br /> <br />
                            <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} type="submit">
                                Submit
              </Button>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
                <Col >
      <Image src="https://www.awardspace.com/wp-content/uploads/2019/02/woocommerce_login.png" style={{ width: '550px', height: '#550px',marginLeft:'100px' }} />
    </Col>
                </Row>
            </center>
        </div>
    )


    function updateSignupInfoInServer(requestObject) {

        auth.userEmail = requestObject.email;

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {

                if ('retailOwnerRole' === requestObject.role) {
                    auth.authenticated = true;
                    console.log('in patient flow signup')
                    props.routeHistory.push("/retailDashboard");
                } else if ('brandManagerRole' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/brandDashboard");
                } else if ('superadmin' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default SignUp

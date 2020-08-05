import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddProduct = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./brandDashboard')
    }
    console.log(errors);

    return (
        <div style={{background:'linear-gradient(157deg, #ffffff, #808080)'}}>
            <center>
                <Card style={{ width: '40rem' }}>

                    <Card.Body>
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="brandName">
                                <Form.Label style={{fontStyle:'italic'}}>Brand Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Brand name" name="brandName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="brandCategory">
                                <Form.Label style={{fontStyle:'italic'}}>Brand Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter Brand Category" name="brandCategory" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="brandLocation">
                                <Form.Label style={{fontStyle:'italic'}}>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Brand Location" name="brandLocation" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="brandPrice">
                                <Form.Label style={{fontStyle:'italic'}}>Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rs" name="brandPrice" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="brandContactEmail">
                                <Form.Label style={{fontStyle:'italic'}}>Brand Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Brand Email" name="brandContactEmail" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="brandContactInfo">
                                <Form.Label style={{fontStyle:'italic'}}>Brand Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter Brand Contact" name="brandContactInfo" ref={register({ required: true, maxLength: 200 })} />
                            </Form.Group>

                            <br /> <br /> <br />
                            <Button variant="primary" type="submit" style={{fontStyle:'italic'}}>
                                Submit
                             </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddProduct

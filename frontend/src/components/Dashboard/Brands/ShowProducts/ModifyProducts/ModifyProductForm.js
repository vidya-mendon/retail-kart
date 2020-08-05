import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyProductForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="brandName">
                <Form.Label style={{fontStyle:'italic'}}>Brand Name</Form.Label>
                <Form.Control defaultValue={props.projectData.brandName} ype="text" placeholder="Enter Brand name" name="brandName" ref={register({ required: true, maxLength: 80 })} style={{fontStyle:'italic'}} />
            </Form.Group>

            <Form.Group controlId="brandCategory">
                <Form.Label style={{fontStyle:'italic'}}>Brand Category</Form.Label>
                <Form.Control defaultValue={props.projectData.brandCategory} type="text" placeholder="Enter Brand Category" name="brandCategory" ref={register({ required: true, maxLength: 80 })} style={{fontStyle:'italic'}}/>
            </Form.Group>

            <Form.Group controlId="brandLocation">
                <Form.Label style={{fontStyle:'italic'}}>Location</Form.Label>
                <Form.Control defaultValue={props.projectData.brandLocation} type="text" placeholder="Enter Brand Location" name="brandLocation" ref={register({ required: true, maxLength: 80 })} style={{fontStyle:'italic'}} />
            </Form.Group>

            <Form.Group controlId="brandPrice">
                <Form.Label style={{fontStyle:'italic'}}>Price</Form.Label>
                <Form.Control defaultValue={props.projectData.brandPrice} type="number" placeholder="Enter Price in Rs" name="brandPrice" ref={register({ required: true, maxLength: 80 })} style={{fontStyle:'italic'}} />
            </Form.Group>

            <Form.Group controlId="brandContactEmail">
                <Form.Label style={{fontStyle:'italic'}}>Brand Email</Form.Label>
                <Form.Control defaultValue={props.projectData.brandContactEmail} type="email" placeholder="Enter Brand Email" name="brandContactEmail" ref={register({ required: true, maxLength: 80 })} style={{fontStyle:'italic'}} />
            </Form.Group>

            <Form.Group controlId="brandContactInfo">
                <Form.Label style={{fontStyle:'italic'}}>Brand Contact</Form.Label>
                <Form.Control defaultValue={props.projectData.brandContactInfo} type="text" placeholder="Enter Brand Contact" name="brandContactInfo" ref={register({ required: true, maxLength: 200 })} style={{fontStyle:'italic'}}/>
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit" style={{fontStyle:'italic'}}>
                Submit
 </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyProductForm

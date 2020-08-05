import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
const UploadProductImage = (props) => {

    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadImageInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('avatar', value)

        fetch('/api/admin/uploadProjectImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                // props.history.push('./myProjects')

                props.history.push({
                    pathname: './createJobOpenings',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div style={{background:'linear-gradient(157deg, #ffffff, #808080)'}}>
            <center>
                <Card style={{ width: '38rem', backgroundColor: 'rgb(128,128,128)',marginTop:'20px' }}>
                    <Card.Body>
                        <Card.Title style={{ color:'#fff' ,fontStyle:'italic'}}>Upload Product Image</Card.Title>
                        <Col >
      <Image src="https://alipartnership.com/wp-content/uploads/2016/02/1_easy-ecommerce-solution.png" style={{ width: '550px', height: '#550px' }} />
    </Col><br /><br /><br />
                        <form encType="multipart/form-data" onSubmit={uploadImageInServer}>
                            <label for="avatar" style={{ color:'#fff',fontStyle:'italic' }}>Select image:&nbsp;&nbsp;  </label>
                            <input type="file" style={{ color:'#fff' }} id="avatar" name="avatar" accept="image/*,video/*" onChange={handleChange} />

                        &nbsp;&nbsp; <Button style={{ backgroundColor: '#00000',color:'#fff',fontStyle:'italic'}} type="submit">SUBMIT</Button>
                        </form>
                    </Card.Body>
                </Card>

            </center>
        </div>
    )





}

export default UploadProductImage

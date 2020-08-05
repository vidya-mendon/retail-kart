import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.projectData.imageName} style={{height:'350px'}} />
                <Card.Body>
                    <Card.Title>{props.projectData.brandName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.brandCategory}|{props.projectData.brandPrice}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/retailDashboard/moreDetails',
                        projectData: props.projectData
                    }}><Button variant="primary">Order Now</Button></Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Contact @  {props.projectData.brandContactEmail}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductCard

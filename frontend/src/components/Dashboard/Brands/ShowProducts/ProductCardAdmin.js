import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProductCardAdmin = (props) => {

    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'../' + props.projectData.imageName} style={{ padding: 10 }} />
                <Card.Body>
                    <Card.Title>{props.projectData.brandName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.projectData.brandCategory}|{props.projectData.brandPrice}</Card.Subtitle>
                    <br /><br />
                    <Link to={{
                        pathname: '/brandDashboard/showProjects/modal/modifyProject',
                        projectData: props.projectData
                    }}><Button variant="primary" style={{fontStyle:'italic'}}>Modify Details</Button></Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted" style={{fontStyle:'italic'}}>Contact @  {props.projectData.brandContactEmail}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductCardAdmin

import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const MyOrdersCard = (props) => {

    const [vendorDetails, setVendorDetails] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: 'rgb(128,128,128)', margin: 25 }}>
                <Card.Body>
                    <Card.Title className="bg-primary" style={{ height: '30px', color: '#fff' }}>{vendorDetails.brandName}</Card.Title>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Ordered Details
                    </Card.Text>
                    <Card.Footer className="text-muted" ><p style={{color:'#fff'}}>Booked Quantity :{props.bookingData.selectedQuantity}</p> <br />
                    <p style={{color:'#fff'}}> Final Price : {props.bookingData.finalPrice}</p> <br /></Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/consumer/getProductInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productId': props.bookingData.projectId })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved consumer', data)
                setVendorDetails(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default MyOrdersCard

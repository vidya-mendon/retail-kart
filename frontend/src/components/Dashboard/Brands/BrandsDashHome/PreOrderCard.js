import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const PreOrderCard = (props) => {

    const [userDataWhoBooked, setUserDataWhoBooked] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div style={{ backgroundColor:'#808080'}}>
            <Card style={{ width: '15rem', backgroundColor: '#196DFD', margin: 25 }}>
                <Card.Body>
                    <Card.Title  style={{ height: '30px', color: '#0341AC',backgroundColor:'#fff' }}>{userDataWhoBooked.name}</Card.Title>
                    <Card.Subtitle style={{ color:'#fff' }}  >{props.bookingData.consumerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" ,fontStyle:'italic'}}>
                        Ordered by above Retailer
                    </Card.Text>
                    <Card.Footer style={{ backgroundColor:'#0000CC',color:'#fff',fontStyle:'italic'}}>  Booked Quantity : {props.bookingData.selectedQuantity} <br />
Final Price : {props.bookingData.finalPrice} <br /></Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': props.bookingData.consumerEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setUserDataWhoBooked(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default PreOrderCard

import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import RetailerDashUI from './1DashboardHome/RetailerDashUI';
import HomeContainer from './0CommonComponents/HomeContainer'
import RetailerDashHeader from './0CommonComponents/RetailerDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import PaymentGateway from './4PaymentGateway/PaymentGateway';
import MyOrders from './MyOrders';

const RetailerDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <RetailerDashHeader logout={props.history} />
            Retailer name : {userInDash.name}
            <br /><br /><br /><br />
            <Route exact path="/retailDashboard/home" component={HomeContainer} />
            <Route exact path="/retailDashboard/" component={RetailerDashUI} />

            <Route exact path="/retailDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/retailDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/retailDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/retailDashboard/myOrders" component={MyOrders} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default RetailerDashContainer

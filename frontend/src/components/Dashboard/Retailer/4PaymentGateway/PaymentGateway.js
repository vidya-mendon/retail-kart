import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CardSectionStyles.css'


const stripePromise = loadStripe('pk_test_zPI7i7o71JQHXxKUSztdvjtZ00V1FkSgGC');

const PaymentGateway = () => {
    return (
        <center>
        <Card style={{ width: '28rem' }}>

        <Card.Body>
        <img class="img-fluid cc-img" src="https://www.bbva.com/wp-content/uploads/2019/05/debit-cards.png" style={{ marginTop:'-20px' }}></img>
        <Card.Title>Payment Gateway
            </Card.Title>
            <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
        <img class="img-fluid cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"></img>

        </Card.Body>
        </Card>
        </center> 
    )
}

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState(null);

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        if (!stripe || !elements) {
            
            return;
        }

        
        const cardElement = elements.getElement(CardElement);

        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        

        fetch('/api/consumer/secret')
            .then(res => res.json())
            .then(data => {


                (async () => {
                    console.log('data json ', data.client_secret)

                    const result = await stripe.confirmCardPayment(data.client_secret
                        , {
                            payment_method: {
                                card: elements.getElement(CardElement),
                                billing_details: {
                                    name: 'Rakesh K',
                                },
                            }
                        });

                    console.log('before result ', result)


                    if (result.error) {
                        console.log(result.error.message);
                    } else {
                        console.log('result ', result)

                        if (result.paymentIntent.status === 'succeeded') {
                            console.log('successful payment')
                        }
                    }
                })()
            })


    };

    return (
        <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <Button variant="primary" type="submit" disabled={!stripe}>Pay</Button>
        
    </form >
    );
};

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' },
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
};

export default PaymentGateway



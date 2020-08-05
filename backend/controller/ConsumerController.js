var express = require('express');
var router = express.Router();

// ******** Add New Booking for consumer ******** 

router.post("/addNewBooking", (request, response) => {

    console.log('addNewBooking ', request.body);
    database.collection("preorderConfirmationTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    

const nodemailer = require('nodemailer');
        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '0546eccbf0efc9',
                pass: '514efd5fae7b25'
            }
        });
        const message = {
            from: 'vidyacmendon@gmail.com', // Sender address
            to: 'jeevan@gmail.com',         // List of recipients
            subject: 'Get your product', // Subject line
            text: 'Your order is ready to serve' // Plain text body
        };
        transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
        //Code to triiger email end

        response.send(result.result);
    });
});


// ******** Fetch User Info using email ******** 
router.get("/getAllProjects", (request, response) => {

    console.log('In getAllProjects')
    database.collection("brandsProductTable").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});



// ******** Fetch User Info using email ******** 
router.get("/secret", async (request, response) => {

    console.log('In Payment Gateway flow')

    // Set your secret key. Remember to switch to your live secret key in production!
    const stripe = require('stripe')('sk_test_QkPVcGcXSk28FffJuoFQVM3D00pI88CqSV');

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 20000,
        currency: 'inr',
        metadata: { integration_check: 'accept_a_payment' },
    });

    console.log('paymentIntent.client_secret ', paymentIntent.client_secret)
    response.json({ client_secret: paymentIntent.client_secret });

});

//COde for getMyOrders Page
var ObjectId1 = require('mongodb').ObjectId;
router.post("/getProductInfo", (request, response) => {
    console.log('getProductInfo ', request.body);
    database.collection("brandsProductTable").find({ _id: new ObjectId1(request.body.productId) }).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});

module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/
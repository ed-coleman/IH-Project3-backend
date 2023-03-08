
const config = require('../../config.json') //port + base url
const express = require('express');
const router = express.Router();

//different domains, ports, etc
const baseUrl = config.baseUrl;
const port = config.port;
const { Client, CheckoutAPI } = require('@adyen/api-library'); //classes from adyen library
const client = new Client(
    {
        apiKey: "AQEvhmfxKoLIYxRDw0m/n3Q5qf3Vap5JDINPS3FdyWK+irGM5Grb8gdmEKVe06z4nU4QwV1bDb7kfNy1WIxIIkxgBw==-hO8fb30hcahYV2FZaWX1Cd1f4ImwtmxRlg3nJ0Nk5tk=-bd4xcY4tpLq}j*@^",
        environment: "TEST" }
);
const checkout = new CheckoutAPI(client);

async function getSession(currency, value, countryCode){
    console.log(currency)
    return checkout.sessions({
        amount: { currency: currency, value: parseFloat(value) },
        reference: "123",
        returnUrl: `${baseUrl}:${port}/payment-return`,
        merchantAccount: 'BudapestkozutECOM',
        countryCode: countryCode,
        
    })
        .then((response) => {
           return response;
        })
        .catch((e) => {
            console.log(e);
        });
}

router.post('/webhook', (req, res) => {
    console.log(req.notificationItems[0].success);
});

router.post('/get-config', async (req, res) => {
    console.log(req.body)
    let configuration = await getSession(req.body.currency, req.body.value, req.body.countryCode);
    res.send(configuration);
});

module.exports = router;
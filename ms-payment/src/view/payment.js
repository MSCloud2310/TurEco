const express = require('express');
const bodyParser = require('body-parser');

const payment = require('../controller/payment');

const app = express();

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Get ammount
app.get('/pay/:id', async (req, res) => {
    //console.log(req.body);
    await payment.get(req, res)
});
// Create account
app.post('/pay', async (req, res) => {
    //console.log(req.body);
    await payment.create(req, res);
});
// Add ammount
app.put('/pay/add', async (req, res) => {
    //console.log(req.body);
    await payment.add(req, res)
});
// Substract ammount
app.put('/pay/sub', async (req, res) => {
    //console.log(req.body);
    await payment.sub(req, res)
});

module.exports = app;
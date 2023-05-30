const Payment = require('../model/payment');

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const payment = await Payment.findByPk(id);
        if(!payment)
            return res.sendStatus(404);
        return res.json(payment);
    } catch(error) {
        console.log('Error fetching the info of payment \n' + error);
        return res.sendStatus(500);
    }
}

const create = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        if(!payment)
            return res.sendStatus(400);
        return res.json(payment);
        } catch(error) {
            console.log('Error creating payment \n' + error);
            return res.sendStatus(500);
        }
}

const add = async (req, res) => {
    try {
        const {client_id, amount} = req.body;
        const pay = await Payment.findByPk(client_id);
        if(!pay)
            return res.sendStatus(404);
        pay.amount = pay.amount + amount;
        pay.save();
        return res.json(pay);
    } catch (error) {
        console.error('Error updating payment \n' + error);
        res.sendStatus(500);
    }
}

const sub = async (req, res) => {
    try {
        const {client_id, amount} = req.body;
        pay = await Payment.findByPk(client_id);
        if(!pay)
            return res.sendStatus(404);
        if(pay.amount >= amount)
            pay.amount = pay.amount - amount;
        else
            return res.sendStatus(400);
        pay.save();
        return res.json(pay);
    } catch (error) {
        console.error('Error updating payment \n' + error);
        res.sendStatus(500);
    }
}

module.exports = {get, create, add, sub};
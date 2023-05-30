const { DataTypes } = require('sequelize');
const conn = require('./config/db_config');


const Payment = conn.define('payment', {
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
},{timestamps: false});

conn.sync().then().catch(error => {
    console.log("Error updating Payment Table: " + error);
});

module.exports = Payment;
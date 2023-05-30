const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_services', 'admin', 'admin12345', {
  host: 'servicedb.c1kq28okfsde.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = sequelize;
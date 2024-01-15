const Sequelize = require('sequelize');
const sequelize = require('./utils/database')
const users = require('./models/users')
const orders = require('./models/orders')

sequelize.sync().then(result => {console.log(result)}).catch(err => {console.log(err)})
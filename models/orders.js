const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Orders = sequelize.define('orders',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Orders;
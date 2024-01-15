const Sequelize = require('sequelize');
const sequelize = new Sequelize('testDB','asc','1005',{
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
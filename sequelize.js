const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://adminweb:adminweb@localhost:5432/adminweb_dev');
exports.sequelize = sequelize;
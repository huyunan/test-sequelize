const { sequelize } = require('./sequelize');
async function test_connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
exports.test_connect = test_connect;
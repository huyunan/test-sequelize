const { sequelize } = require("../../sequelize");
const { Sequelize } = require('sequelize');
const { fileManageModel } = require("./file-manage.model");

const aihubServerMasterModel = sequelize.define('aihubServer', {
  aihubServerId: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    primaryKey: true
  },
  aiCd: {
    type: Sequelize.INTEGER(),
    allowNull: true
  }
}, {
  tableName: 'adw.mst_aihub_server',
  underscored: true
});
exports.aihubServerMasterModel = aihubServerMasterModel;
const { sequelize } = require("../../sequelize");
const { Sequelize } = require('sequelize');
const { aihubServerMasterModel } = require("./aihub-server.model");

const fileManageModel = sequelize.define('mstFileManage', {
  fileId: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'adw.mst_file_manage',
  paranoid: true,
  underscored: true
});
exports.fileManageModel = fileManageModel;
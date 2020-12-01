const { sequelize } = require("./sequelize");
const { QueryTypes, DataTypes } = require("sequelize");
const { fileManageModel } = require("./app/model/file-manage.model");
const { aihubServerMasterModel } = require("./app/model/aihub-server.model");
async function query() {
  // await sequelize.sync({ force: true });
  await fileManageModel.destroy({
    where: {
      fileId: 3
    }
  });
  await fileManageModel.findAll({
    where: {
      fileId: 3
    }
  });
  // await fileManageModel.upsert({
  //   fileId: 1,
  //   fileName: 'hu'
  // });
  // await fileManageModel.upsert({
  //   fileId: 2,
  //   fileName: 'yu'
  // });
  // await fileManageModel.upsert({
  //   fileId: 3,
  //   fileName: 'nan'
  // });
}
exports.query = query;

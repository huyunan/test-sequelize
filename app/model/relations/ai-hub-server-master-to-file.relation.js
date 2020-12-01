const { aihubServerMasterModel } = require("../aihub-server.model");
const { fileManageModel } = require("../file-manage.model");

function relation() {
  aihubServerMasterModel.model.hasOne(
    this.fileManageModel.model,
    {
      sourceKey: 'sshPrivateKeyFileId',
      foreignKey: 'fileId',
      constraints: false,
    }
  );

}
const { sequelize } = require('./sequelize');
async function query() {
  const code = await sequelize.query("select * from adw.mst_code");
  const [results, metadata] = await sequelize.query("select * from adw.mst_entity");
  console.log(code, null, 4);
  console.log(results, null, 4);
  console.log(metadata, null, 4);
}
exports.query = query;
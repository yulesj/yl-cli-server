module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ProjectSchema = new Schema({
    name: { type: String },
    npmName: { type: String },
    version: { type: String },
    value: { type: String },
  });

  // mongoose 查询的时候会加上 s eg. projects  所以建立数据库链接名称需要加s
  return mongoose.model('project', ProjectSchema);
};

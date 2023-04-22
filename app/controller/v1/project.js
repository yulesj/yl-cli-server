const { Controller } = require('egg');

// const ADD_TEMPLATE = [
//   {
//     name: 'vue3 项目模板',
//     npmName: '@imooc.com/template-vue3',
//     version: '1.0.1',
//     value: 'template-vue3',
//   },
//   {
//     name: 'react18项目模板',
//     npmName: '@imooc.com/template-react18',
//     version: '1.0.0',
//     value: 'template-react18',
//   },
//   {
//     name: 'vue-element-admin项目模板',
//     npmName: '@imooc.com/template-vue-element-admin',
//     version: '1.0.0',
//     value: 'template-value-element-admin',
//   },
// ];

class ProjectController extends Controller {
  //  项目模板查询
  async index() {
    const { ctx } = this;
    const res = await ctx.model.Project.find({});
    ctx.body = res;
  }
  // 项目模板查询
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const template = await ctx.model.Project.find({ value: id });
    if (template.length > 0) {
      ctx.body = template[0];
    } else {
      ctx.body = {};
    }
  }
  // 项目模板新增
  create() {
    this.ctx.body = 'create';
    console.log(this.ctx.request);
  }

  // 项目模板更新
  update() {}

  // 项目模板删除
  destory() {}
}

module.exports = ProjectController;

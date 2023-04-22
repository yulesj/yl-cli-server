const { Controller } = require('egg');

const ADD_TEMPLATE = [
  {
    name: 'vue3 项目模板',
    npmName: '@imooc.com/template-vue3',
    version: '1.0.1',
    value: 'template-vue3',
  },
  {
    name: 'react18项目模板',
    npmName: '@imooc.com/template-react18',
    version: '1.0.0',
    value: 'template-react18',
  },
  {
    name: 'vue-element-admin项目模板',
    npmName: '@imooc.com/template-vue-element-admin',
    version: '1.0.0',
    value: 'template-value-element-admin',
  },
];

class ProjectController extends Controller {
  async template() {
    const { ctx } = this;
    ctx.body = ADD_TEMPLATE;
  }
}

module.exports = ProjectController;

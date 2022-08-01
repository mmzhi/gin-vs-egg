'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = {
      title: 'World'
    }
    await this.ctx.render('index.tpl', data);
  }
}

module.exports = HomeController;

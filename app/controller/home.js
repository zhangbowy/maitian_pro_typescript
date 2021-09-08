'use strict';

const Controller = require('../core/base_controller');

class HomeController extends Controller {
  async index() {
    this.ctx.logger.info(111);
    this.success('hi,egg');
  }
}

module.exports = HomeController;

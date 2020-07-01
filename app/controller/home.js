'use strict';

const Controller = require('egg').Controller;
const logger = require('../log4js').logger('Home');

class HomeController extends Controller {
    async index() {
        //TODO 尝试在这边打印log，会报错
        logger.info('home_index...');
        const {ctx} = this;
        ctx.body = 'hi, egg';
    }
}

module.exports = HomeController;

'use strict';

//TODO
const log4js = require('log4js');

log4js.configure({
        appenders: {
            out: {type: 'console'},
            task: {
                type: 'dateFile',
                filename: 'logs/log4js/task',
                'pattern': '-yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            result: {
                type: 'dateFile',
                filename: 'logs/log4js/result',
                'pattern': '-yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            error: {
                type: 'dateFile',
                filename: 'logs/log4js/error',
                'pattern': '-yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            default: {
                type: 'dateFile',
                filename: 'logs/log4js/default',
                'pattern': '-yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
        },
        categories: {
            default: {appenders: ['out', 'default'], level: 'info'},
            task: {appenders: ['task'], level: 'info'},
            result: {appenders: ['result'], level: 'info'},
            error: {appenders: ['error'], level: 'error'},
        }
    }
);

module.exports.log4js = log4js;

module.exports.logger = function (category) {
    return log4js.getLogger(category);
};

module.exports.use = function (app) {
    app.use(log4js.connectLogger(log4js.getLogger('default'), {level: 'INFO'}));
};

//运行本文件测试可行
/*const logger = log4js.getLogger();
logger.info('logger.infooooo');*/

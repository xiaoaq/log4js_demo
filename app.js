'use strict';

const log4js = require('./app/log4js').log4js;

module.exports = app => {

    //TODO
    console.log(log4js);
    app.use(log4js.connectLogger(log4js.getLogger("http"), {
        level: 'auto',
        format: ':remote-addr - -' + ' ":method :url HTTP/:http-version"' + ' :status :content-length :response-time ":referrer"' + ' ":user-agent"'
    }));

};

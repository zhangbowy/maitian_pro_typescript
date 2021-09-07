'use strict';
const FileTransport = require('egg-logger').FileTransport;
const ConsoleTransport = require('egg-logger').ConsoleTransport;
const moment = require('moment');
const Logger = require('egg-logger').Logger;
const path = require('path');
class CoustomTransport extends FileTransport {
  constructor(options, ctx) {
    super(options);
    this.ctx = ctx;
  }

  log(level, args, meta) {
    const prefixStr = this.buildFormat(level);
    for (const i in args) {
      if (args.hasOwnProperty(i)) {
        if (parseInt(i, 10) === 0) {
          if (args[i] === 'response->' || args[i] === '<-request') {
            args[i] = `${args[i]} ${prefixStr}`;
          } else {
            args[i] = `${prefixStr}${args[i]}`;
          }
        //   if (parseInt(i, 10) === args.length - 1) {
        //     args[i] += '\n';
        //   }
        }
      }
    }
    super.log(level, args, meta);
  }


  buildFormat($level) {
    const timeStr = `time=${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}｜`;
    const pid = `processId=${process.pid}｜`;
    const tranceId = `tranceId=${this.ctx.traceId}｜`;
    const level = `level=${$level}｜`;
    const urlStr = `path=${this.ctx.request.url}｜`;
    const method = `method=${this.ctx.request.method}|`;
    const query = `query=${JSON.stringify(this.ctx.request.query)}|`;
    const httpStatus = `httpStatus=${JSON.stringify(this.ctx.status)}|`;
    const body = `body=${JSON.stringify(this.ctx.request.body)}`;
    return `[${timeStr}${pid}${tranceId}${level}${urlStr}${method}${httpStatus}${query}${body}] `;
  }
}


module.exports = function(ctx) {
  const logger = new Logger();
  logger.set('file', new CoustomTransport({
    level: 'INFO',
    file: path.join(process.cwd(), '/logs/app.log'),
  }, ctx));
  logger.set('console', new ConsoleTransport({
    level: 'INFO',
  }));
  return logger;
};


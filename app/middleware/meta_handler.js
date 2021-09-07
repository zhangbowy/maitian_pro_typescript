'use strict';
/**
 * default options
 */
const defaultOptions = {
  requestTimeout: 10 * 1000, // request timeout, default is 10s
  requestTimeoutCallback: () => { }, // request timeout callback
  sendPowerBy: true, // send powerby
  sendResponseTime: true, // send response time
  logRequest: true,
  logResponse: true,
};
module.exports = options => {
  options = Object.assign({}, defaultOptions, options);
  return (ctx, next) => {
    ctx.traceId = ctx.uuid('v4');
    // send power by header
    if (options.sendPowerBy && !ctx.res.headersSent) {
      ctx.res.setHeader('X-Powered-By', 'ASP.NET');
      ctx.res.setHeader('X-TraceId', ctx.traceId);
    }
    // log request
    if (options.logRequest) {
      ctx.logger.info('<-request');
    }
    // send response  time header
    if (options.sendResponseTime || options.logResponse) {
      const startTime = Date.now();
      let err;
      return next().catch(e => {
        err = e;
      }).then(() => {
        const endTime = Date.now();
        if (options.sendResponseTime && !ctx.res.headersSent) {
          ctx.res.setHeader('X-Response-Time', `${endTime - startTime}ms`);
        }
        if (options.logRequest) {
          process.nextTick(() => {
            ctx.logger.info('response->', `${endTime - startTime}ms`);
          });
        }
        if (err) return Promise.reject(err);
      });
    }
    return next();

  };
};

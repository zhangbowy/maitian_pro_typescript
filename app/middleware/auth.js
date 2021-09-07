'use strict';

/**
 * 判断是否登录
 * @param {object} _options - 中间件的配置项
 * @param {Egg.Application} app - 当前应用的实例
 * @author ruiyong-lee
 * @return {null} null
 */
// eslint-disable-next-line no-unused-vars
module.exports = (_options, app) => {
  return async function auth(ctx, next) {
    // 过滤登录接口和验证token
    const ignorePaths = [ '/user/login', '/user/logout' ];
    const valid = await ctx.verifyToken();
    if (valid || ignorePaths.includes(ctx.path)) {
      await next();
    }
  };
};

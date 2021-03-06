import BaseController from '@/core/baseController';
import { SelfController as Controller, Post, Get } from '@/router';
import { create as captchaCreate } from 'svg-captcha';
import { Auth } from '@/lib//decorator/auth';
// import { LoginType } from '@/lib/enum';
@Controller('/user')
export default class UserController extends BaseController {
  /**
   * 登陆
   */
  @Post('/login')
  @Get('/login')
  public async login(): Promise<void> {
    const url = `https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=https://maitian2.dcpool.net/api/user/auth&app_id=${this.config.feishu.appid}&state=HtU64rLTVEH6M8YZuItgHg4xQLCKQuqf`;
    this.ctx.redirect(url);
  }

  @Get('/info')
  @Auth()
  public userInfo() {
    const userinfo = this.ctx.session.userInfo;
    this.success(userinfo);
  }

  /**
   * 飞书授权回调接口
   */
  @Get('/auth')
  public async auth() {
    const { ctx } = this;
    const { code } = ctx.request.query;
    if (!code) {
      return this.fail(0, '飞书授权回调code不存在');
    }
    const result = await ctx.service.feishu.getUserAccessToken(code);
    const userInfo = {
      access_token: result.access_token,
      name: result.name,
      avatar_url: result.avatar_url,
      avatar_thumb: result.avatar_thumb,
      open_id: result.open_id,
      union_id: result.union_id,
      token_type: result.token_type
    };
    this.ctx.session.userInfo = userInfo;
    this.ctx.service.feishu.sendLoginNotice(userInfo);
    this.ctx.redirect('/#/salesInformation');
  }

  /**
   * 登出
   */
  @Auth()
  @Post('/logOut')
  public async loginOut(): Promise<void> {
    // this.ctx.removeToken();
    this.ctx.session.userInfo = null;
    this.success([], '操作成功');
  }
  /**
   * 获取验证码
   */
  @Get('/getCaptcha')
  public async getCaptcha(): Promise<void> {
    /** 验证码默认配置 */
    const defaultOptions = {
      size: 4, // size of random string
      ignoreChars: '', // filter out some characters
      noise: 1, // number of noise lines
      color: false, // default grey, true if background option is set
      background: '#ffffff', // background color of the svg image
      width: 120, // width of captcha
      height: 40, // height of captcha
      // fontPath: './fonts/Comismsh.ttf', // your font path
      fontSize: 60, // captcha text size
      charPreset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' // random character preset
    };
    const { data, text } = captchaCreate(defaultOptions);

    // this.ctx.session.captcha = text;
    this.ctx.cookies.set('captcha', text, { sameSite: 'none', encrypt: true });
    this.ctx.type = 'svg';
    this.ctx.body = data;
  }

  public async error() {
    throw new Error('see the error stack!!');
  }
}

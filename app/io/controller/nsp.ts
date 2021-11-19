// {app_root}/app/io/controller/nsp.js
const Controller = require('egg').Controller;

class NspController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    console.log(message, 'message');
    const socket = ctx.socket;
    const client = socket.id;

    try {
    //   const { target, payload } = message;
    //   if (!target) return;
    //   const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
    setInterval(()=> {
        nsp.adapter.clients(1, (err, clients) => {
            if (err) return;
            socket.emit('online', clients);
        });
      },1000);
    socket.emit('message',{
        cmd: 'heart',
        data: {client}
    });
    //   nsp.emit(target, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = NspController;

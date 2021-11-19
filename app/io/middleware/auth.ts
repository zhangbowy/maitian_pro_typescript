'use strict';

const PREFIX = 'room';

module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/');
    nsp.on('connection', function(socket: any){
      // setInterval()
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });

    logger.debug('#user_info', id);

    // const tick = (id, msg) => {
    //   logger.debug('#tick', id, msg);

    //   // 踢出用户前发送消息
    //   socket.emit(id, 'bye');

    //   // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
    //   nsp.adapter.remoteDisconnect(id, true, err => {
    //     logger.error(err);
    //   });
    // };

    // // 检查房间是否存在，不存在则踢出用户
    // // 备注：此处 app.redis 与插件无关，可用其他存储代替
    // const hasRoom = await app.redis.get(`${PREFIX}:${room}`);
    // logger.debug('#has_exist', hasRoom);

    // if (!hasRoom) {
    //   tick(id, {
    //     type: 'deleted',
    //     message: 'deleted, room has been deleted.',
    //   });
    //   return;
    // }

    // // 用户加入
    // logger.debug('#join', room);
    // socket.join(1);
    // console.log(id);
    // 在线列表
    // @ts-ignore
    nsp.adapter.clients(1, (err, clients) => {
      // logger.debug('#online_join', clients);
      console.log(JSON.stringify(clients));
      setInterval(()=> {
        socket.emit('heart', 'hi');
      },10000);
      if (!clients.includes(id)) {
        ctx.session.userInfo = 1;
        socket.join(1);
      }

      // 更新在线用户列表
      nsp.to(1).emit('online', {
        clients,
        action: 'join',
        target: 'participator',
        message: `User(${id}) joined.`,
      });
    });

    await next();

    // 用户离开
    logger.debug('#leave', 1);

    // 在线列表
    // @ts-ignore
    nsp.adapter.clients(1, (err, clients) => {
      logger.debug('#online_leave', clients);

      // 获取 client 信息
      // const clientsDetail = {};
      // clients.forEach(client => {
      //   const _client = app.io.sockets.sockets[client];
      //   const _query = _client.handshake.query;
      //   clientsDetail[client] = _query;
      // });

      // 更新在线用户列表
      nsp.to(1).emit('online', {
        clients,
        action: 'leave',
        target: 'participator',
        message: `User(${id}) leaved.`,
      });
    });

  };
};

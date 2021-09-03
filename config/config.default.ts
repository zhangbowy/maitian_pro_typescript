'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  config.middleware = [ '', 'errorHandler' ];

  config.security = {
    csrf: {
      ignore: '123',
    },
  };

  // config.customLoader = {
  //   model: {
  //     directory: 'app/model',
  //     inject: 'app',
  //     caseStyle: 'upper',
  //   },
  // };
  const bizConfig = {
    local: {
      msg: 'local',
    },

    uuid: {
      name: 'ebuuid',
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}

'use strict';

import 'tsconfig-paths/register';
import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  }
}

export default plugin
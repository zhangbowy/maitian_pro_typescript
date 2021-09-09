'use strict';

module.exports = (app) => {
  const { Sequelize } = app;

  return {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    name: {
      type: Sequelize.STRING(8),
      comment: '类型名称：CNY、USDT、FIL',
    },
    type: {
      type: Sequelize.TINYINT(1).UNSIGNED,
      comment: '支持类型',// 支持类型：1.不可用 2.手动配置 3.自动跟踪
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
      comment: '手动配置的相对CNY汇率',
    },
  };
};

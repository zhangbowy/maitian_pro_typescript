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
    userId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      comment: '创建者id',
    },
    title: {
      type: Sequelize.STRING(255),
      comment: '标题',
    },
    type: {
      type: Sequelize.TINYINT(1).UNSIGNED, //类型
      defaultValue: 1,
      comment: '公告类型 1：提醒',
    },
  };
};

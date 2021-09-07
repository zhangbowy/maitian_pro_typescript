'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  return {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键id',
    },
    userId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '用户id',
    },
    miner: {
      type: STRING(32),
      allowNull: false,
      comment: '节点名称',
    },
  };
};

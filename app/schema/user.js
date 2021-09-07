'use strict';

module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;
  return {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键id',
    },
    userName: {
      type: STRING(128),
      allowNull: false,
      comment: '用户名',
    },
    tel: {
      type: STRING(128),
      comment: '手机号',
    },
    email: {
      type: STRING(128),
      comment: '邮箱',
    },
    password: {
      type: STRING(128),
      comment: '登录密码',
    },
    pledgeType: {
      type: TINYINT(1).UNSIGNED,
      defaultValue: 2,
      comment: '质押类型：1 公司质押 2 个人质押',
    },
    card: {
      type: STRING(128),
      comment: '身份证号',
    },
    country: {
      type: STRING(128),
      comment: '国家',
    },
    countryCode: {
      type: STRING(128),
      comment: '国家码',
    },
    filWallet: {
      type: STRING(128),
      comment: 'fil充值钱包地址',
    },
    usdtWallet: {
      type: STRING(128),
      comment: 'usdt充值钱包地址',
    },
    dealerId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '经销商id',
    },
    distributorId: {
      type: INTEGER.UNSIGNED,
      comment: '分销商id',
    },
    isDistributor: {
      type: TINYINT(1).UNSIGNED,
      defaultValue: 1,
      comment: '1:普通用户，2:分销商',
    },
    minerType: {
      type: TINYINT(1),
      defaultValue: 0,
      comment: '0. 非独立节点用户 1.独立节点用户 2. 购买订单的独立节点用户',
    },
    platform: {
      type: TINYINT(1),
      defaultValue: 1,
      comment: '平台：1.DC 2. 上轩',
    },
    source: {
      type: TINYINT(1),
      defaultValue: 1,
      comment: '来源：1. 国内 2. 海外',
    },
  };
};

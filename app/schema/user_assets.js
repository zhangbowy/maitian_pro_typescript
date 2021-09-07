'use strict';

module.exports = app => {
  const { INTEGER, BIGINT } = app.Sequelize;
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
    pledgeLeft: {
      type: BIGINT(30),
      comment: '质押备用金',
    },
    freezeProfit: {
      type: BIGINT(30),
      comment: '冻结收益',
    },
    totalProfit: {
      type: BIGINT(30),
      comment: '总收益',
    },
    filWithdrawal: {
      type: BIGINT(30),
      comment: 'fil可提现余额',
    },
    usdtWithdrawal: {
      type: BIGINT(30),
      comment: 'usdt可提现余额',
    },
    freezePledge: {
      type: BIGINT(30),
      comment: '冻结质押备用金',
    },
    personPledge: {
      type: BIGINT(30),
      comment: '个人质押总额',
    },
    personGas: {
      type: BIGINT(30),
      comment: '个人支付gas费',
    },
    companyPledge: {
      type: BIGINT(30),
      comment: '公司质押总额',
    },
    companyPledgeInterest: {
      type: BIGINT(30),
      comment: '公司质押利息',
    },
    companyGas: {
      type: BIGINT(30),
      comment: '公司支付gas费',
    },
    companyGasInterest: {
      type: BIGINT(30),
      comment: '公司支付gas费利息',
    },
    borrow: {
      type: BIGINT(30),
      comment: '借贷金额',
    },
    borrowInterest: {
      type: BIGINT(30),
      comment: '借贷金额利息',
    },
    currentStorage: {
      type: BIGINT(30),
      comment: '当前存力/GB',
    },
    migrateArrears: {
      type: BIGINT(30),
      comment: '迁移费欠款',
    },
    migrateArrearsSupplement: {
      type: BIGINT(30),
      comment: '补缴迁移费欠款',
    },
  };
};

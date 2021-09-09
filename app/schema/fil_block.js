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
    blockHeight: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      comment: '全网区块高度',
    },
    productionDaily: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      comment: '当日全网总产出 FIL',
    },
    storagePower: {
      type: Sequelize.DECIMAL(16, 4).UNSIGNED,
      comment: '全网有效算力 EiB',
    },
    activeMiners: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      comment: '活跃矿工数',
    },
    averageMiningReward: {
      type: Sequelize.DECIMAL(12, 6).UNSIGNED,
      comment: '平均挖矿收益 FIL/TiB',
    },
    currentSectorPledge: {
      type: Sequelize.DECIMAL(8, 4).UNSIGNED,
      comment: '当前扇区质押量 FIL',
    },
    totalPledgeCollateral: {
      type: Sequelize.BIGINT.UNSIGNED,
      comment: 'FIL质押量 FIL',
    },
    messageDaily: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      comment: '24h消息数',
    },
    currentPrice: {
      type: Sequelize.DECIMAL(8, 4).UNSIGNED,
      comment: '最新FIL币价格 $',
    },
    currentBaseFee: {
      type: Sequelize.DECIMAL(20, 10).UNSIGNED,
      comment: '基础费率 nanoFIL',
    },
  };
};

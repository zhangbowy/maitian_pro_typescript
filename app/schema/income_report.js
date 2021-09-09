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
    date: {
      type: Sequelize.DATE,
      comment: '记录时间',
    },
    pledgePerSector: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      allowNull: false,
      comment: '当日扇区质押所需费用 FIL/32GB',
    },
    incomePerSector: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      allowNull: false,
      comment: '当日每扇区存力可产生收益 FIL/32GB',
    },
    sector: {
      type: Sequelize.DECIMAL(8, 4).UNSIGNED,
      comment: 'M9 分配的扇区',
    },
    storage: {
      type: Sequelize.DECIMAL(16, 4).UNSIGNED,
      comment: '点存存力 /PB',
    },
    storage: {
      type: Sequelize.DECIMAL(16, 4).UNSIGNED,
      comment: '点存存力 /PB',
    },
    gasFee: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      comment: 'gas fee /FIL/32GB',
    },
    windowedPost: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      comment: '单个扇区时空证明销毁费用 (FIL/32GiB)/2349',
    },
    commitSector: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      comment: '封存扇区销毁费用 FIL/32GiB',
    },
    pledgeSixtyFour: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      allowNull: false,
      comment: '当日扇区质押所需费用 FIL/64GB',
    },
    gasFeeSixtyFour: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      comment: 'gas fee /FIL/64GB',
    },
    commitSixtyFour: {
      type: Sequelize.DECIMAL(30, 18).UNSIGNED,
      comment: '封存扇区销毁费用 FIL/64GiB',
    },
  };
};

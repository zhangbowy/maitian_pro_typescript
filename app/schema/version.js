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
    version: {
      type: Sequelize.STRING(11),
      allowNull: false,
      comment: '版本号',
    },
    versionCode: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      defaultValue: 0,
      allowNull: false,
      comment: 'app端小版本号',
    },
    force: {
      type: Sequelize.TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '强制更新 0、1',
    },
    downUrl: {
      type: Sequelize.STRING(255),
      defaultValue: '',
      comment: '下载地址',
    },
    platform: {
      type: Sequelize.TINYINT(1).UNSIGNED,
      defaultValue: 1,
      comment: '平台 1、android 2、ios',
    },
    local: {
      type: Sequelize.TINYINT(1).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '国内和国外 0、国内 1、国外 ',
    },
  };
};

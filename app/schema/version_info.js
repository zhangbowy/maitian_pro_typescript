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
    versionId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      comment: '版本id',
    },
    lang: {
      type: Sequelize.STRING(16),
      comment: '语言',
      defaultValue: 'zh',
      comment: 'zh: 中文； en: 英文'
    },
    content: {
      type: Sequelize.STRING(512),
      allowNull: false,
      comment: '更新内容',
    },
  };
};

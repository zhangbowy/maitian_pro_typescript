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
    noticeId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      comment: "公告id"
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: '标题',
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: '内容',
    },
    lang: {
      type: Sequelize.STRING(16),
      comment: '语言',
      defaultValue: 'zh',
      comment: 'zh: 中文； en: 英文'
    },
  };
};

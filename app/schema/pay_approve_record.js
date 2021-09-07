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
    payNo: {
      type: STRING(64),
      allowNull: false,
      comment: '支付单据号',
    },
    user_type: {
      type: TINYINT(4).UNSIGNED,
      defaultValue: 1,
      comment: '提交记录用户类型：1：普通用户 2：经销商 3：管理员',
    },
    approveUserId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '记录来源的用户id',
    },
    approveUserName: {
      type: STRING(128),
      allowNull: false, 
      comment: '记录来源的用户姓名',
    },
    opinion: {
      type: STRING(256),
      comment: '审批意见',
    },
  };
};

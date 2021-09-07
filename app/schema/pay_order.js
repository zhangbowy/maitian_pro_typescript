'use strict';

module.exports = app => {
  const { STRING, INTEGER, TINYINT, DATE, DECIMAL } = app.Sequelize;
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
    userId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '用户id',
    },
    type: {
      type: TINYINT(4).UNSIGNED,
      defaultValue: 1,
      comment: '支付订单类型 1:托管 2:扩容',
    },
    payType: {
      type: TINYINT(4).UNSIGNED,
      defaultValue: 1,
      comment: '付款方式 1:CNY 2:USDT 3:FIL',
    },
    tradeNo: {
      type: STRING(128),
      defaultValue: '',
      comment: '第三方支付编号',
    },
    totalAmount: {
      type: DECIMAL(18, 8).UNSIGNED,
      defaultValue: 0,
      comment: '应付金额',
    },
    payAmount: {
      type: DECIMAL(18, 8).UNSIGNED,
      defaultValue: 0,
      comment: '实付金额',
    },
    status: {
      type: TINYINT(4).UNSIGNED,
      defaultValue: 0,
      comment: '状态 0:下单 1:确认支付 2:管理员审核成功 3:用户取消 4:退款 5: 经销商审核完成 6:经销商拒绝 7:管理员拒绝 8:系统已取消',
    },
    payAt: {
      type: DATE,
      comment: '支付时间',
    },
    remark: {
      type: STRING,
      comment: '备注',
    },
    describe: {
      type: STRING,
      comment: '描述',
    },
  };
};

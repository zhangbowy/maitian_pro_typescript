// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportOrderInfo = require('../../../app/model/order_info');
import ExportOrderRelatedSn = require('../../../app/model/order_related_sn');
import ExportOrderRule = require('../../../app/model/order_rule');
import ExportStudent = require('../../../app/model/student');

declare module 'egg' {
  interface IModel {
    OrderInfo: ReturnType<typeof ExportOrderInfo>;
    OrderRelatedSn: ReturnType<typeof ExportOrderRelatedSn>;
    OrderRule: ReturnType<typeof ExportOrderRule>;
    Student: ReturnType<typeof ExportStudent>;
  }
}

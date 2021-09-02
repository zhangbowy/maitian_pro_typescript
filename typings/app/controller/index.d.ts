// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportOrder = require('../../../app/controller/order');
import ExportStudent = require('../../../app/controller/student');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    order: ExportOrder;
    student: ExportStudent;
    user: ExportUser;
  }
}

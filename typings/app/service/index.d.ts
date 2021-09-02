// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportOrder = require('../../../app/service/order');
import ExportStudent = require('../../../app/service/student');

declare module 'egg' {
  interface IService {
    order: AutoInstanceType<typeof ExportOrder>;
    student: AutoInstanceType<typeof ExportStudent>;
  }
}

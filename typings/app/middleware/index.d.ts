// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportMetaHandler = require('../../../app/middleware/meta_handler');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    errorHandler: typeof ExportErrorHandler;
    metaHandler: typeof ExportMetaHandler;
  }
}

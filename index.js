const { sendError } = require('@appsignal/nodejs');

sendError(new Error('test'));

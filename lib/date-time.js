// date-time.js

// USAGE:

// var DateTime = require('./date-time');
// var toDateTimeString = DateTime.toDateTimeString;
// var toDateString = DateTime.toDateString;
// var toTimeString = DateTime.toTimeString;

// DateTime.extendDateToDateTimeString();
// DateTime.extendDateToString();

// var toDateTimeString = require('./date-time').toDateTimeString;
// var toDateString = require('./date-time').toDateString;
// var toTimeString = require('./date-time').toTimeString;

// require('./date-time').extendDateToDateTimeString();
// require('./date-time').extendDateToString();

'use strict';

function pad2(n) { return n < 10 ? '0' + n : n; }
function pad3(n) { return n < 10 ? '00' + n : (n < 100 ? '0' + n : n); }


//######################################################################

// class Date : method toDateTimeString extension
// Date+Time 日付+時刻
function toDateTimeString(x) {
  x = x instanceof Date ? x : this instanceof Date ? this : new Date;
  return x.getFullYear() + '-' +
    pad2(x.getMonth() + 1) + '-' +
    pad2(x.getDate()) + ' ' +
    pad2(x.getHours()) + ':' +
    pad2(x.getMinutes()) + ':' +
    pad2(x.getSeconds()) + '.' +
    pad3(x.getMilliseconds());
}


//######################################################################

// Date 日付
function toDateString(x) {
  x = x instanceof Date ? x : this instanceof Date ? this : new Date;
  return x.getFullYear() + '-' +
    pad2(x.getMonth() + 1) + '-' +
    pad2(x.getDate());
}


//######################################################################

// Time 時刻
function toTimeString(x) {
  x = x instanceof Date ? x : this instanceof Date ? this : new Date;
  return pad2(x.getHours()) + ':' +
    pad2(x.getMinutes()) + ':' +
    pad2(x.getSeconds()) + '.' +
    pad3(x.getMilliseconds());
}


//######################################################################

// class Date: extend method to*String()
function extendDateToDateTimeString() {
  Date.prototype.toDateTimeString = toDateTimeString;
  Date.prototype.toDateString     = toDateString;
  Date.prototype.toTimeString     = toTimeString;
}


//######################################################################

// class Date: extend method toString()
function extendDateToString() {
  Date.prototype.toString         = toDateTimeString;
}


//######################################################################

// module exports
module.exports = {
  toDateTimeString:           toDateTimeString,
  toDateString:               toDateString,
  toTimeString:               toTimeString,
  extendDateToDateTimeString: extendDateToDateTimeString,
  extendDateToString:         extendDateToString
}

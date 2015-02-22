// date-time-test.js

var dt = new Date();
console.log('new Date()\n' +
            '          ' + dt + '\n');

if (typeof DateTime === 'undefined')
  var DateTime = require('../lib/date-time-string');

console.log('DateTime.toDateTimeString(new Date())\n' +
            '          ' + DateTime.toDateTimeString(dt));
console.log('DateTime.toDateString(new Date())\n' +
            '          ' + DateTime.toDateString(dt));
console.log('DateTime.toTimeString(new Date())\n' +
            '          ' + DateTime.toTimeString(dt));
console.log('DateTime.toHttpDate(new Date())\n' +
            '          ' + DateTime.toHttpDate(dt) + '\n');

DateTime.extendDateToDateTimeString();
console.log('new Date().toDateTimeString()\n' +
            '          ' + dt.toDateTimeString());
console.log('new Date().toDateString()\n' +
            '          ' + dt.toDateString());
console.log('new Date().toTimeString()\n' +
            '          ' + dt.toTimeString());
console.log('new Date().toHttpDate()\n' +
            '          ' + dt.toHttpDate() + '\n');

DateTime.extendDateToString();
console.log('new Date().toString()\n' +
            '          ' + dt.toString());
console.log('new Date()\n' +
            '          ' + dt);

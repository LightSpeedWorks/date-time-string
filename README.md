[date-time-string](https://www.npmjs.org/package/date-time-string) - npm
====

# INSTALL:

```bash
$ npm install date-time-string
```

or

http://lightspeedworks.github.io/date-time-string/lib/date-time.js

```html
<script src="http://lightspeedworks.github.io/date-time-string/lib/date-time.js"></script>
```

# USAGE:

## simple functions

```js
var DateTime = require('date-time-string');

console.log(DateTime.toDateTimeString());   // 2014-12-15 21:58:56.450
console.log(DateTime.toDateString());       // 2014-12-15
console.log(DateTime.toTimeString());       // 21:58:56.450
console.log(DateTime.toHttpDate());         // Mon, 15 Dec 2014 12:58:56 GMT

var d = new Date;
console.log(DateTime.toDateTimeString(d));  // 2014-12-15 21:58:56.450
console.log(DateTime.toDateString(d));      // 2014-12-15
console.log(DateTime.toTimeString(d));      // 21:58:56.450
console.log(DateTime.toHttpDate(d));        // Mon, 15 Dec 2014 12:58:56 GMT
```


## extend Date class

```js
var DateTime = require('date-time-string');

DateTime.extendDateToDateTimeString();
var d = new Date;
console.log(d.toDateTimeString());  // 2014-12-15 21:58:56.450
console.log(d.toDateString());      // 2014-12-15
console.log(d.toTimeString());      // 21:58:56.450
console.log(d.toHttpDate());        // Mon, 15 Dec 2014 12:58:56 GMT

DateTime.extendDateToString();      // ***DANGER***
var d = new Date;
console.log(d.toString());          // 2014-12-15 21:58:56.450
```

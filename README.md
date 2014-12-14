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
var toDateTimeString = DateTime.toDateTimeString;
var toDateString     = DateTime.toDateString;
var toTimeString     = DateTime.toTimeString;

console.log(toDateTimeString());
console.log(toDateString());
console.log(toTimeString());

var d = new Date;
console.log(toDateTimeString(d));
console.log(toDateString(d));
console.log(toTimeString(d));
```


## extend Date class

```js
var DateTime = require('date-time-string');

DateTime.extendDateToDateTimeString();
var d = new Date;
console.log(d.toDateTimeString());
console.log(d.toDateString());
console.log(d.toTimeString());

DateTime.extendDateToString();
var d = new Date;
console.log(d.toString());
```

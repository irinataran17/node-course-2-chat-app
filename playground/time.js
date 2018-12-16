var moment = require('moment');


// var date = moment();
// date.add(100, 'year').subtract(3, 'months');
// console.log(date.format('MMM Do, YYYY'));


// 10:25 am
// 6:01 am

console.log(moment().format('LT'));
// moment().format('LT');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
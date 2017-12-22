'use strict';

const Clock = require('./Clock'),
	myData = require('./my-data');

console.log(
	myData.name,
	myData.email,
	myData._phone
);

const cucu = new Clock();

cucu.theTime();
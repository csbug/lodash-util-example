// Load the full build.
var _ = require('lodash');
const print = console.log;

const ver = function() { print('lodash version : ' + _.VERSION); }
ver();

//Lodash random number
// var r = _.random(10);
var r = _.random(5, 10);
print(r);


// Lodash determine data type
const vals = [1, 2, 'good', [1, 2], { name: 'Peter', age: 32 }];
vals.forEach((e) => {

    if (_.isNumber(e)) {
        print(`${e} is a number`);
    }

    if (_.isString(e)) {
        print(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        print(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        print(JSON.stringify(e) + ' is an object');
    }

});

//Lodash _.range function
const rangeVals = _.range(5, 10);
print(rangeVals);

print(_.padEnd('abc', 1));


// Date Methods
// Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

print('get now method output');
print(_.now());

// The _.times() executes the function n times. 

_.times(4, () => {

    console.log("brave");
})
// Load the full build.
var _ = require('lodash');
const print = console.log;

const ver = function(){print('lodash version : '+ _.VERSION);}
ver();

//Lodash random number
// var r = _.random(10);
var r = _.random(5, 10);
print(r);


// Lodash determine data type
const vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];
vals.forEach( (e) => {

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
const rangeVals = _.range(5,10);
print(rangeVals);
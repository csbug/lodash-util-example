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

// range  
const vals3 = _.range(0, 15, 5);
console.log(vals3);

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
print(_.chunk(['a', 'b', 'c', 'd'], 3));


// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
print(_.compact([0, 1, false, 2, '', 3, null]));

// Creates a new array concatenating array with any additional arrays and/or values.
var array = [1];
var other = _.concat(array, 2, [3], [
    [4]
]);

print(other);

// Loop through a collection and return a deeply-nested property from each item
// Fetch the name of the first pet from each owner
var ownerArr = [{
    "owner": "Colin",
    "pets": [{ "name": "dog1" }, { "name": "dog2" }]
}, {
    "owner": "John",
    "pets": [{ "name": "dog3" }, { "name": "dog4" }]
}];

// Array's map method.
print(ownerArr.map(function(owner) {
    return owner.pets[0].name;
}));

// Lodash
print(_.map(ownerArr, 'pets[0].name'));
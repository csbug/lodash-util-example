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


// Removing properties from object
// Naive method: Remove an array of keys from object
Object.prototype.remove = function(arr) {
    var that = this;
    arr.forEach(function(key) {
        delete(that[key]);
    });
};

var objA = { "name": "colin", "car": "suzuki", "age": 17 };

objA.remove(['car', 'age']);
print(objA); // {"name": "colin"}

// Lodash
objA = _.omit(objA, ['car', 'age']); // {"name": "colin"}
print(objA);


// Select properties from another object to form new object
// Naive method: Returning a new object with selected properties 
Object.prototype.pick = function(arr) {
    var _this = this;
    var obj = {};
    arr.forEach(function(key) {
        obj[key] = _this[key];
    });

    return obj;
};

var objA = { "name": "colin", "car": "suzuki", "age": 17 };

var objB = objA.pick(['car', 'age']);
print(objB);
// {"car": "suzuki", "age": 17}

// Lodash
var objB = _.pick(objA, ['car', 'age']);
// {"car": "suzuki", "age": 17}
print(objB);


// Selecting a random item from a list

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

function pickRandomPerson(luckyDraw) {
    var index = Math.floor(Math.random() * (luckyDraw.length));
    return luckyDraw[index];
}

print(pickRandomPerson(luckyDraw)); // John

// Lodash
print(_.sample(luckyDraw)); // Colin

// Multiple random item
// Lodash - Getting 2 random item
print(_.sample(luckyDraw, 2)); // ['John','Lily']
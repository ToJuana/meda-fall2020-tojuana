var myVar = 100;

myVar = 200;

myVar = 100;

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var months = [
    'january',
    'february',
    'march',
    'april'
];
var mixedArray = [100, 'Hello World', true]

console.log(weekdays);

console.log(mixedArray[4]);

mixedArray[1] = 'Hello There';
console.log(mixedArray);

mixedArray[3] = 1005;
console.log(mixedArray);

mixedArray[1] = null;
console.log(mixedArray);

var emptyArray = [];

//Array Methods
// Array Push adds to the end
emptyArray.push('this is the first item!');
console.log(emptyArray);
emptyArray.push(10000);
emptyArray.push(true);

// Array Pop removes from the end

var tempItem = emptyArray.pop();
console.log(emptyArray);
emptyArray.pop();
emptyArray.pop();
console.log(emptyArray);

// Array unshift add to the beginning
weekdays.unshift('Superday');
console.log(weekdays);

// Array Shift (-)remove from the beginning
weekdays.shift();
console.log(weekdays);

// Array splice cutting out and keeping what we want

// Array forEach
/*
listOfItemsArray.forEach(function (eachItem){
    use eachItem however you want
})
*/

weekdays.forEach(function (weekday) {
    console.log(weekday);
});

// Loops and Arrays

var setOfNumbers = [1, 10, 100, 1000, 10000];

for(var i = 0; i < setOfNumbers.length; i = i + 1){
    var product = setOfNumbers[i] * 6;
    console.log(product);
}
// Array with Array 

var masterArray = [
    [10, 29],
    [14, 20],
    [50, 12]
];
masterArray; // the entire array
masterArray[1].length
masterArray[2][0]; //This will grab the number 50 from the third array inside of this array.


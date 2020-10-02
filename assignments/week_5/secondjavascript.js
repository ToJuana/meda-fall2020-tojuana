// Datatyps
'string';
1000;
false;
var someVariable = 100;

if (someVariable > 10) {
    console.log('This number is larger than 10');
    if (someVariable < 1000) {
        console.log('This number is lower than 1000');
    }
} else {
    console.log('This number is lower than 10');
}

//Functions
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}
coolFunction();

//Arguments get stored inside Parameters
//Argument are the values given to the function and parameters are the function variables that will hold these values.


function addExclamation(message, num) {
    console.log(message,'!!!!!', 100)

    var results = num * 2;
    console.log(results);
}
addExclamation('Hello how are you', 3);
addExclamation('It is raining', 4);
addExclamation('Goodbye', 43);


//Returning values from functins.
//the someText variablee was created when you call the function, but it also get destroyed when the function call ends.
function getText() {
    var someText = 'Nice weather.';
    return someText;
}
console.log(getText());
var userName = 'Lisa';
//concatenation
var completeSentence = 'My name is ' + userName;
//Typ coercion
console.log(completeSentence);
console.log('Hello' + 100);
console.log(100 + 100);
//Trying to multiple a string, we end up with a special Number called NaN.
var longString = 'Hello there!' * 10;
console.log(longString);
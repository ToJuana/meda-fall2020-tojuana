var timer = setInterval(function () { // Asynchronous code(waits)
    console.log('1 second has pass')
}, 1000)


// Synchronous code does Not wait
console.log(1);
console.log(2);
console.log(3);

// Asynchronous (waits)

setTimeout(function () {
    console.log(5);

    clearInterval(timer);
}, 5500);

/*setInterval(function () {
    console.log('3 seconds have pased.');
}, 3000);*/

// clearInterval(runsFover); this will stop the interval.
console.log(6);



// Closures

var myGlobalVariable = 100;

function someFunction () {
    var myLocalVariable = 10;
  console.log(myLocalVariable);

  console.log(myGlobalVariable);
}
someFunction();

console.log(myGlobalVariable);

// console.log(myLocalVarible0); Cannot access myLocalVariable because it is in a child scope.





// If statements do not have scopes;
if (true) {
    // Code to run
}
if (false) {
   // Code to run
}


// Example
if (true) {
    var createdVariable = 300;
}

console.log(createdVariable);
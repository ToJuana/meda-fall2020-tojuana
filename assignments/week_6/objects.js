var  myObject = {
    id: "93j2l9d",
    "first Name": "Rob",
    lastName: "Smith",
    address: ["123 Main St.", "345 California St."],
    age: 45,
    title: "Engineer"
};

var myArray = ["Rob", "Smith", "123 Main St.", 45, "Engineer"];

var months = {
    firstMonth: "January",
    secondMonth: "February"
};

myArray.length;
myArray[0]; // myArray.0 IS NOT VALID
console.log(myObject.address);
myObject["first Name"]; // how to access key with space in it.

var myEmployees = [];

myEmployees.push(myObject);

mySecondEmployee = {
    firstName: "Dan",
    lastName: "Lincoln",
    address: "124 Main St.",
    age: 32,
    title: "CEO"
};

myThirdEmployee = {
    firstName: "Mary",
    lastName: "Doe",
    address: "345 USA St.",
    age: 40,
    title: "Scientist"
};

// Push 2 more employees into the employee array.
myEmployees.push(mySecondEmployee, myThirdEmployee);

console.log(myEmployees);

// Track the total additive ages.
var totalAges = 0;

// Loop through each element in our employee array.
for (var i = 0; i < myEmployees.length; i = i + 1) {
    // ... And get the age of the current employee, add it to totalAges.
    totalAges = totalAges + myEmployees[i].age;
}

// Divide the total ages by the amount of employee we had to get the average age.
var averageAge = totalAges / myEmployees.length;

console.log(averageAge);

// Functions inside of Objects, Arrays, and Variables.

var something = 100;

// Definition of a function.
function someFunction() {
    console.log("I am a function!");
}

// We are NOT calling someFunction, instead we are passing the definition of someFunction into storedFunction.
var storedFunction = someFunction;

// Because storedFunction is holding an actual function (from line 66) we can actually run this function by putting parenthesis after the variable call.
storedFunction();
// We didn't get rid of the someFunction definition, so we can still call it even though we have the same thing in storedFunction.
someFunction();

var runForEachEmployee = function (employee) {
    console.log("Hello!" + employee.firstName);
};

myEmployees.forEach(runForEachEmployee);

var specialObject = {
    doSomeWork: function () {
        console.log("Working!");
    },
    someData: "Hello there"
};


// Runs the function stored in the key "doSomeWork" inside of specialObject object.
specialObject.doSomeWork();
console.log();
myEmployees.length;


// An object's Property holds data (that belongs to that object).
// An Object's Method holds a function (that belongs to that object).

var myArray2 = [
    100,
    200,
    function () {
        console.log("hello");
    },
    400
];

myArray2[2](); // Runs the function in the array at index 2.

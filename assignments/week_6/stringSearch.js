var string = 'This is a sentence.';

var stringArray = string.split('');

console.log(stringArray);
stringArray.pop();
console.log(stringArray);

var updatedString = stringArray.join('');

console.log(updatedString);

// Search and replace (search for 'e')
var firstMatch = -1;

for (var i = 0; i < stringArray.length; i++) {
  
    var currentLetter = stringArray[i];
    if(currentLetter === 'e') {
        console.log('We found an e!');

        firstMatch =1; //this will save the index of the number match, so it can be used later, after the loop is done.
        //We used -1 to repersent 'not found'

        stringArray[i] = 'E';

        //break; This will stop the loop once we find the first match.

        continue;// This will ingnore the followin code and  move on with the rest of the loop.
    }
    console.log('No e here!');
} 

if (firstMatch === -1) {
   console.log('We did not find any ES.');
} else {

}

console.log(stringArray.join(''));
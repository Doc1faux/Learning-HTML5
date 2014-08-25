var myNumber = 5; // 5.5, 5.5e+5, 0x391
var myString = 'HelloWorld'; // "Hello Wayne's world", 'Hello Wayne\'s world'
var myBoolean = true; // false

var type = typeof myUndefinedVar; // undefined, number, string, boolean
//var string = prompt('Enter: ');
myNumber = parseInt('5', 10);

// === (content & type equality), !=== (content or type inequality)

//var boolean = confirm('OK or cancel?');

/*
0 == false
'' == false
undefined == false
*/

// continue; instruction in a while loop jumps to the next iteration dropping the remaining code
// loop vars still exists after loop execution...

var myGlobalVar;

function myFunction(firstArg, secondArg) {
    var myLocalVar;
}

// Anonymous function
var myAnonymFunc = function (args) {

};

// Declaration and Immediate Execution isolated anonymous function
(function (args) {

})();

var myArray = [];
//myArray.push(args ...);       // Add items at the end of array
//myArray.unshift(args ...);    // Add items at the begin of array
//myArray.shift();              // Remove the first item of the array
//myArray,pop();                // Remove the last item of the array
//myArray.join(', ');           // Return a string made of cells content separated by commas
//myString.split(',');          // Split the string at each comma encountered and return an array of these strings

var myObject = {};

// Don't use it on arrays
// for in loop is much time consuming than classic for loop
for(var memberName in myObject) {
    
}

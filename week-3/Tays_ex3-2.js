var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match(arg1, arg2) {
    if(arg1 === arg2){
        return true;
    }
    else{
        return false;
    }
} 

function logMismatch(arg1, arg2) {
    return 'The first argument: ' + arg1 + ' does not match the second argument: ' + arg2;
}

function logMatch(arg1, arg2) {
    return 'The first argument: ' + arg1 + ' matches the second argument: ' + arg2;
}

// six (6) test variables 
var truck = 'dodge';
var car = 'dodge';
var bike1 = 'harley davidson';
var bike2 = 'harley davidson';
var num1 = 5;
var num2 = 5;

// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 3.2"));
// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (truck === car) {
    console.log(logMatch(truck, car));
} else {
    console.log(logMismatch(truck, car));
}

if (bike1 === bike2) {
    console.log(logMatch(bike1, bike2));
} else {
    console.log(logMismatch(bike1, bike2));
}

if (num1 === num2) {
    console.log(logMatch(num1, num2));
} else {
    console.log(logMismatch(num1, num2));
}






// end program 
var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 
// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 3.4"));

// test variable
var test = 6;


// for loop


console.log("-- Displaying for loop --");
for(var i = 0; i < 8; i++){
    var rand = randomNumber();
    if(match(test, rand)){
        console.log(logMatch(test, rand));
    }
    else{
        console.log(logMismatch(test, rand));
    }
}



// while loop
console.log("\n-- Displaying while loop --"); 

var j = 0;
while(j < 10){
    var rand = randomNumber();
    if(match(test, rand)){
        console.log(logMatch(test, rand));
    }
    else{
        console.log(logMismatch(test, rand));
    }
    j++;
}


// Reused functions from exercise-3.2.js
function match(arg1, arg2) {
    if(arg1 === arg2){
        return true;
    }
    else{
        return false;
    }
}

function logMismatch(arg1, arg2) {
    return arg1 + ' does not match the second argument: ' + arg2;
}

function logMatch(arg1, arg2) {
    return arg1 + ' matches the second argument: ' + arg2;
}





// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}
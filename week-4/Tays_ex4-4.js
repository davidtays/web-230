/*
============================================
; Title:  Assignment 4.4
; Author: David Tays
; Date:   20 December 2017
; Modified By: <David Tays>
; Description: This program demonstrates the
;   display of an array, sorted array, and filtered
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
// function
function getValue(x, val) {
    return x.filter(word => word === val); //I learned this shorthand here...
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
}

//returns a random number based on the length of the array passed to it
function getRand(array){
    return array[Math.floor(Math.random() * array.length)];
}

// Output
//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 4.4") + "\n");

//display original Array of states
console.log('-- ORIGINAL ARRAY --\n'); 
states.forEach(function(item){console.log(item)});
console.log('\n'); 

//display sorted Array of states
var sorted = states.sort();
console.log('-- SORTED ARRAY --\n');
sorted.forEach(function(item){console.log(item)});
console.log('\n'); 

//display the getValue function
console.log(' -- SELECTED VALUE --\n');
var newArray = getValue(states, getRand(states));
newArray.forEach(function(item){console.log(item)});

// end program

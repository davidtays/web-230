var header = require('../header.js');
/*
============================================
; Title:  Assignment 4.2
; Author: David Tays
; Date:   20 December 2017
; Modified By: <David Tays>
; Description: This program demonstrates using a foreach method to 
;    display an array
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(items) {
  /**TEST***********TEST****************TEST*/
  //This is for testing the output, and uses a different iterating method
   /* for(var i = 0; i < items.length; i++){
    console.log(items[i] + ' THE INDEX: ' + i);
    }*/

  //Uses the forEach method to print out the items (fruits). 
  items.forEach(function(item){console.log(item);});
}




// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 4.2") + "\n");

// Output from the getFruit() function
getFruit(fruits);


// end program
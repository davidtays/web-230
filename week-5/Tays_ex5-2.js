/*
============================================
; Title:  Assignment 5.2
; Author: David Tays
; Date:   09 January 2018
; Modified By: <David Tays>
; Description: Create a one-dimensional array with 5 elements of your favorite food type• 
;   Using the forEach() method, iterate over the array and output the results
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program
var favFoods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];


//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 5.2") + "\n");

// Output
favFoods.forEach(function(foo) {console.log(foo)});





// end program
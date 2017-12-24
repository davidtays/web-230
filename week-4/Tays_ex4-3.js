/*
============================================
; Title:  Assignment 4.3
; Author: David Tays
; Date:   20 December 2017
; Modified By: <David Tays>
; Description: This program demonstrates displaying an array and
;    an item of an array
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

var items = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr, val) {
    arr.forEach(function(item){
        if(item === val){
            console.log("-- SELECTED VALUE --\n" + item);
        }
    });

}

//gets random value based on the length of the array
function getRand(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}


// Output
//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 4.3") + "\n");

//output items in array
items.forEach(function(item){console.log(item);});
console.log('\n'); 

//output randomly selected items
getValue(items, getRand(items));
console.log('\n'); 

getValue(items, getRand(items));

// end program
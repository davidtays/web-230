
/*
============================================
; Title:  Assignment 6.2
; Author: David Tays
; Date:   09 January 2018
; Modified By: <David Tays>
; Description: 
;===========================================
*/ 
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
//array for testing
var nums = [1,2,3,4,5,6,7,8,9]

//random array
function getRand(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 6.2") + "\n");

try {
  var n = getRand(nums);
  //checks random number against a bit to check if even or odd
  if(n & 1){
      console.log('The number is even');
  }
  else{
      console.log('The number is odd');
  }
  consloe.log('this will fail'); //misspelled console intentionally to throw exception
} catch (err) {
    console.log('Catch clause: The var x is not valid');
} finally {
    console.log('Finally clause reached: End of program â€¦');
}

// end program
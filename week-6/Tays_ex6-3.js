/*
============================================
; Title:  Assignment 6.2
; Author: David Tays
; Date:   09 January 2018
; Modified By: <David Tays>
; Description: 
;===========================================*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

var ticket = {
    id: 0001,
    name: 'General',
    requester: 'David Tays'
    
};

//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 6.3") + "\n");
//first attempt at displaying the object formatted
for(x in ticket){
    console.log(x + ": " + ticket[x]);
}

//second attempt after reading more
console.log(JSON.stringify(ticket));

// end program
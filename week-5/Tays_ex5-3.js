/*
============================================
; Title:  Assignment 5.3
; Author: David Tays
; Date:   09 January 2018
; Modified By: <David Tays>
; Description: 
;  1.  Create an Array-Like Object of 5 famous composers with the following fields: 
;    firstNamea
;    lastName
;    genre 
;    rating (1-10) 
;  2. Iterate over the Array-Like Object using the built-in forEach() method and output the result
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

var famousComposers = [
    {
    firstName: 'Ted',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8,
    },
    {
    firstName: 'Juan',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10,
    },
    {
    firstName: 'Sebastian',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9,
    },
    {
    firstName: 'Robert',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6,
    },
    {
    firstName: 'Maya',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5,
    },
    ];

//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 5.3") + "\n");

// Output
famousComposers.forEach(function(foo) {console.log("Last Name: " + foo.lastName + ", Genre: " + foo.genre + ", Rating: " + foo.rating)});


// end program
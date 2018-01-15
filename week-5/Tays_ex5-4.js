/*
============================================
; Title:  Assignment 5.4
; Author: David Tays
; Date:   09 January 2018
; Modified By: <David Tays>
; Description: Reuse the Array-Like Object collection created in Exercise 5.3 (famousComposers)
;  1. Using the map() method, create a filtered list of composers by rating
;  2. Using the map() method, create a filtered list of composers by genre 
;  3. Iterate over the filtered collections using the forEach() method and output the result
;===========================================
*/ 


var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
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


var comnposersByRating = famousComposers.map(function(composer) {
    return "Rating: " + composer.rating + "\nComposer: " + composer.lastName
});

var composersByGenre = famousComposers.map(function(composer) {
    return "Genre: " + composer.genre + "\nComposer: " + composer.lastName
});
// Output
//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 5.4") + "\n");

console.log("-- COMPOSER BY RATING --");
comnposersByRating.forEach(function(lastName) { console.log(lastName)});

console.log('\n'); 

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(lastName) { console.log(lastName)});

console.log('\n'); 






// end program
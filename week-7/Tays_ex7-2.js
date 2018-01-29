var header = require('../header.js');
/*
============================================
; Title:  Assignment 7-2
; Author: David Tays
; Date:   28 January 2018
; Modified By: <David Tays>
;
;===========================================
*/ 
/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Employee(eID,fName,lName,eTitle){
    this.id = eID;
    this.firstName = fName;
    this.lastName = lName;
    this.title = eTitle;
}
var emps = [
    new Employee(1001, "Thomas", "Edison", "Software Engineer"),
    new Employee(1002, "Benjamin", "Franklin", "Programmer"),
    new Employee(1003, "Nikola", "Tesla", "Project Manager"),
    new Employee(1003, "Charles", "Babbage", "Product Manager"),
    new Employee(1004, "Alexander", "Bell", "Business Analyst")
];


//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 7.2") + "\n");
//output
Object.entries(emps).forEach(
    ([index, key]) => console.log(key.firstName + " " + key.lastName + " " + key.title)
);

// end program
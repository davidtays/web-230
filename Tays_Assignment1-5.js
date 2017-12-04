/*
============================================
; Title:  Assignment 1.5
; Author: David Tays
; Date:   03 December 2017
; Modified By: <David Tays>
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "David";
var myLastName = "Tays";
var date = new Date();
var todaysDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var emp1FName = 'John J';
var emp1LName = 'Jingleheimer Smidt';
var emp1Address = 'Same Name Dr.';
var emp1PayRate = 15.5;
var emp1HireDate = new Date(2010, 2, 22);
var emp1Display = "\n" + emp1FName + "\n" + emp1LName + "\n" + emp1Address + "\n$" + emp1PayRate.toFixed(2) + "\n" + emp1HireDate.getMonth() + "/" + emp1HireDate.getDate() + "/" + emp1HireDate.getFullYear();
console.log(emp1Display);

var emp2FName = 'Curly';
var emp2LName = 'Stooges';
var emp2Address = 'Clumsy Dr.';
var emp2PayRate = 12.5;
var emp2HireDate = new Date(2010,3, 26);
var emp2Display = "\n" + emp2FName + "\n" + emp2LName + "\n" + emp2Address + "\n$" + emp2PayRate.toFixed(2) + "\n" + emp2HireDate.getMonth() + "/" + emp2HireDate.getDate() + "/" + emp2HireDate.getFullYear();
console.log(emp2Display);

var emp3FName = 'Moe';
var emp3LName = 'Stooges';
var emp3Address = 'Clumsy Dr.';
var emp3PayRate = 12.5;
var emp3HireDate = new Date(2011, 3, 26);
var emp3Display = "\n" + emp3FName + "\n" + emp3LName + "\n" + emp3Address + "\n$" + emp3PayRate.toFixed(2) + "\n" + emp3HireDate.getMonth() + "/" + emp3HireDate.getDate() + "/" + emp3HireDate.getFullYear();
console.log(emp3Display);

var emp4FName = 'Larry';
var emp4LName = 'Stooges';
var emp4Address = 'Clumsy Dr.';
var emp4PayRate = 12.25;
var emp4HireDate = new Date(2011, 3, 26);
var emp4Display = "\n" + emp4FName + "\n" + emp4LName + "\n" + emp4Address + "\n$" + emp4PayRate.toFixed(2) + "\n" + emp4HireDate.getMonth() + "/" + emp4HireDate.getDate() + "/" + emp4HireDate.getFullYear();
console.log(emp4Display);

var emp5FName = 'Vanilla';
var emp5LName = 'Ice';
var emp5Address = 'Glow Ave.';
var emp5PayRate = 25.5;
var emp5HireDate = new Date(2009, 2, 22);
var emp5Display = "\n" + emp5FName + "\n" + emp5LName + "\n" + emp5Address + "\n$" + emp5PayRate.toFixed(2) + "\n" + emp5HireDate.getMonth() + "/" + emp5HireDate.getDate() + "/" + emp5HireDate.getFullYear();
console.log(emp5Display);

// end of program 


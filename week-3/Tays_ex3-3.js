var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
// Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 3.3"));
var eventKeyCode = 15;

/*if (eventKeyCode == 13) {
    console.log("The enter key was pressed"); 
} else if (eventKeyCode == 16) {
    console.log("The shift key was pressed"); 
} else if (eventKeyCode == 32) {
    console.log("The spacebar key was pressed")
} else if (eventKeyCode == 8) {
    console.log("The backspace / delete key was pressed");
} else {
    console.log("Unrecognized key press"); 
}*/
switch(eventKeyCode){
    case 13:
      console.log("The enter key was pressed");
      break;
    case 16:
      console.log("The shift key was pressed");
      break;
    case 32:
      console.log("The spacebar key was pressed");
      break;
    case 8:
      console.log("The backspace / delete key was pressed");
      break;
    default:
      console.log("Unrecognized key press"); 
      break;
}


// end program 
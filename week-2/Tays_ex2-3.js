var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
davidTays.f = 'David';
davidTays.l = 'Tays';

// function 
function davidTays() {
    return 'Hello ' + davidTays.f + ' ' + davidTays.l + '!';
}

// output 
console.log(header.display("David", "Tays", "Excercise 2.3"));
console.log("\n");
console.log('\n' + davidTays()); 





// end program 
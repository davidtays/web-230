var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
    id: 0001,
    name: "General",
    dateCreated: new Date().toLocaleDateString(),
    priority: 1,
    personId: 100,
    person: {
        // person properties
        id: 101,
        firstName: 'David',
        lastName: 'Tays',
        jobTitle: 'Lead Developer'
    }
};

//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 6.3") + "\n");

//Output
console.log(JSON.stringify(ticket));

console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').');


// end program
var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(/*firstName*/f, /*lastName*/l) {
    return f + ' ' + l;
}

function dateWriter(/*year*/y, /*month*/m, /*day*/d) {
    /*If this function does not get 3 values, it gives todays date*/
    if(y === undefined || m === undefined || d === undefined){
        return new Date().toLocaleDateString();
    }
    else{
        m -= 1;
        return new Date(y,m,d).toLocaleDateString();
    }
    
}

function formatNumber(/*number*/n, /*fixed position*/fp) {
   return n.toFixed(fp);
}

function convertToInt(/*string*/txt) {
   return parseInt(txt);
}

function convertToFloat(/*string*/txt) {
   return parseFloat(txt);
}

// output 
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 2.3"));
console.log("\n");
console.log('Hello, my name is ' + fullName("David", "Tays")
 + "\nToday's date is " + dateWriter(/*2016, 10, 25*/)
  + " and the current temperature is " + formatNumber(33.255555, 1)
   + " degrees\nI am " + convertToInt("36") +
    " years old and my savings account goal is " + convertToFloat(1000000) + " dollars.");


// end program 
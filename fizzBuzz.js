let output = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        output += "fizz";
    }    
    
    if (i % 5 == 0) {
        output += "buzz";
    }

    if (output == "") {
        output += i;
    }
}

// Need to write a function here to replace console.log that assigns "fizz" "buzz" "fizzbuzz" or i to a tile then assigns it the appropriate CSS class, changing its color 
console.log(output);
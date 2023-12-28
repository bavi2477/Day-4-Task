let array = ["radar", "level", "hello", "madam", "world"];
let final = [];
// Anonymous Function

function palindrome(arr) {
     arr = arr.filter(word => {
        let result = word.toLowerCase();
        if(result === result.split('').reverse().join('')) {
            final.push(result);
        }
     });
}

palindrome(array);

console.log(final);

// IIFE
(function(arr) {
    arr = arr.filter(word => {
        let final = [];
       let result = word.toLowerCase();
       if(result === result.split('').reverse().join('')) {
           final.push(result);
       }
    });
    console.log(final);
})(["radar", "level", "hello", "madam", "world"]);

// Arrow Function
let finals = [];
palindromes = (arr) => {
    arr = arr.filter((word) => {
            let result = word.toLowerCase();
            if(result === result.split('').reverse().join('')) {
                finals.push(result);
            }
    });
    console.log(finals);
}

palindromes(array);




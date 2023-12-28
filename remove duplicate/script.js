let array = [1,1,2,3,4,6,6];

// Anonymous Function

function removeDuplicate(arr) {
    console.log(Array.from(new Set(arr)));
}

removeDuplicate(array);

// IIFE

(function(arr) {
    console.log(Array.from(new Set(arr)));
})([1,1,1,33,33,456,7,8,8]);

// Arrow Function

// removeDuplicates = (arr) => console.log(Array.from(new Set(arr)));

// removeDuplicates(array);
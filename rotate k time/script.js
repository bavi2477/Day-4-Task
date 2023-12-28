let array = [1, 2, 3, 4, 5];
let k = 2;

// Anonymous Function
function rotate(arr, k) {
    let n = arr.length;

    let rotationIndex = k % n;

    let rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));

    console.log(rotatedArray);
};

rotate(array,k);

// IIFE

(function(arr,k) {
    let n = arr.length;

    let rotationIndex = k % n;

    let rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));

    console.log(rotatedArray);
})([1,2,3,5],1);

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

// Anonymous Function

function median(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

    let middleIndex = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2 === 0) {
    
        console.log((mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2);
    } else {
        
        console.log(mergedArray[middleIndex]);
    }
};

median(array1, array2);

// IIFE

(function(arr1, arr2){
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

    let middleIndex = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2 === 0) {
    
        console.log((mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2);
    } else {
        
        console.log(mergedArray[middleIndex]);
    }
})([1,3],[4,5,6]);

// // Arrow Function

// medians = (arr1, arr2) => {
//     let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

//     let middleIndex = Math.floor(mergedArray.length / 2);

//     if (mergedArray.length % 2 === 0) {
    
//         console.log((mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2);
//     } else {
        
//         console.log(mergedArray[middleIndex]);
//     }
// };

// medians(array1,array2);
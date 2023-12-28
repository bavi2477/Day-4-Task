let array = [10,20,30,40];

// Anonymous Function

function sum (array){
    let sum = 0;
    for(let i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     console.log (sum);
  }

sum(array);

// IIFE

(function(array){
    let sum = 0;
         for(let i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
    })([5,5,5,5]);

// Arrow Function

sum = (array)=>{
    let sum = 0;
         for(let i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
          }
sum(array);
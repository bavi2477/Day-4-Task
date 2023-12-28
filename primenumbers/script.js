let array = [2, 3, 4, 5, 6]

//Anonymous Function

function Prime(arr){
    arr = arr.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(arr);
}

Prime(array);

// IIFE

(function(arr){
       arr = arr.filter((number) => {
         for (let i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(arr);
   })([5,6,7,8]);

// Arrow Function

primeNumber = (arr) => {
    arr = arr.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(arr);
}

primeNumber(array);
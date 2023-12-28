//Anonymous
let array = [1, 2, 3, 4];

 function oddNumber(array) {
    for(let ind = 0; ind < array.length; ind++) {
        if(array[ind] % 2 != 0) {
            console.log(array[ind]);
        } 
    }
 }

 oddNumber(array);

 // IIFE

 (function(array){
    for(let ind = 0 ; ind < array.length ; ind++){
               if(array[ind] % 2 != 0){
                  console.log(array[ind])
               } 
          }
    })([1,2,3,4])

//Arrow Function

oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
}

 oddNumbers(array);




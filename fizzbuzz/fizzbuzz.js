function fizzbuzz(numArray){
  numArray.map(function(num){
    if(num % 7 === 0 && num % 4 === 0){
      console.log("fizzbuzz") 
    }else if(num % 4 === 0){
      console.log("buzz")
    }else if(num % 7 === 0){
      console.log("fizz")
    }else{
      console.log("neither")
    }
  })
}
console.log(fizzbuzz([78,77,70,44,40,28,100]))
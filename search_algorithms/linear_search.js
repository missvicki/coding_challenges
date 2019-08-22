function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) return i;
    }
    return -1;
}
linearSearch([1,5,3,19,3013,39,10,10,100], 10)
// least significant digit


const radixSort = arr => {
    const maxNum = Math.max(...arr) * 1000;
    let divisor = 10;
  
    while (divisor < maxNum) {
      let buckets = [...Array(10)].map(() => []);
  
      for (let num of arr) {
        buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      }
  
      arr = [].concat.apply([], buckets);
      divisor *= 10;
    }
    console.log(arr)
    return arr;
};

radixSort([1,5,7,4,3,5,20,10,100,30,201, 4, 6 , 100,7 ,23])
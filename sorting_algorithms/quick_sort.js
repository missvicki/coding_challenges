const quickSort = arr => {
    if (arr.length < 2) return arr;
  
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    let left = [];
    let equal = [];
    let right = [];
  
    for (let element of arr) {
      if (element > pivot) right.push(element);
      else if (element < pivot) left.push(element);
      else equal.push(element);
    }
    return quickSort(left)
      .concat(equal)
      .concat(quickSort(right));
  };
  


quickSort([1,5,7,4,3,5,20,10, 100, 30, 4, 6 ,7 ,23]);
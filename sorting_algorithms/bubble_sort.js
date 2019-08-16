const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      let change = false;
      for (let j = 0; j < arr.length - (i + 1); j++) {
        if (arr[j] > arr[j + 1]) {
          change = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      if (!change) break;
    }
    return arr;
};

bubbleSort([1,5,7,4,3,5,20,10, 100, 30, 4, 6 ,7 ,23])
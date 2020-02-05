// Task: Transform a simple sorting algorithm into a unique sort
// it should not return any duplicate values in the sorted array

// input: [3,1,2,3] => Output: [1,2,3]

const uniqSort = function(arr){
  const breadcrumbs = {};
  const result = [];

  for(let i =0; i<arr.length; i++){
    if(!breadcrumbs[arr[i]]){
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a,b) => a-b);
};

uniqSort([4,2,2,3,2,2,2])


// Implement a function to make AJAX requests which caches the results of the requests.
// Don't use any global variables, all the data should be stored in the function's inner scope using closure.
// To make an actual request use function request(url) which is preloaded for you. It would return a Promise. In case request fails promise would be rejected.
// Your function should keep the behavior of the request function: when request fails is should reject the promise and resolve it otherwise.

const cachedRequest = (function() {
  const cache = {};
  return function(url) {
    if (cache[url]) {
      return cache[url];
    } else {
      const response = request(url);
      cache[url] = response;
      return response;
    }
  };
})();


// Write a function that traverses the DOM-like tree starting from the
// given element and returns all (not only direct) the children of that element.
// Each tree node is guaranteed to have children array-like property.
// The return value of the traverse function should be a flat list of nodes.

// Example:

// Input tree:

// {
//   children: [
//      {children: [{children: [], name: 'span'}], name: 'li'},
//      {children: [], name: 'li'}
//   ],
//   name: 'div'
// }

function traverse(node, includeCurrentNode=false) {
  var result = [];
  if(includeCurrentNode){
    result.push(node);
  }
  for(let i = 0; i < node.children.length; i++){
    const child = node.children[i];
    result = result.concat(traverse(child, true));
  }
  return result;
}

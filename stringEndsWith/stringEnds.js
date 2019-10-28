// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(string, target) {
  (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');

function confirmEnd(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnd('Bastian', 'n');

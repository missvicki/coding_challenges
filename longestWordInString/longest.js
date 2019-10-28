function longestWord(str){
  const splitString = str.split(" ");
  let longestWord = 0;

  for(let i =0; i < splitString.length; i++){
    if(splitString[i].length > longestWord){
      longestWord = splitString[i].length
    }
  }
  return longestWord;
}
console.log(longestWord("The fox jumped over the fence and ate the cat"))

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
console.log(findLongestWord("The fox jumped over the fence and ate the cat"))


function findLongest(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}
console.log(findLongest("The quick brown fox jumped over the lazy dog"));
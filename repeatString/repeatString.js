function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

function repeatString(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatString(string, times - 1);
}
repeatString("abc", 3);

function repeatStr(string, times) {
  times > 0 ? string.repeat(times) : "";
}
repeatStr("abc", 3);

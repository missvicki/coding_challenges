function reverse_a_string(str){
    // split the string into an array
    const splitString = str.split("");
    console.log(splitString)

    // use the reverse() on the array
    const reversedArray = splitString.reverse();
    console.log(reversedArray)

    // use the join() to join all elements of the array into a string
    const joinString = reversedArray.join("");

    console.log(joinString)

    return joinString;
}

reverse_a_string("my name")

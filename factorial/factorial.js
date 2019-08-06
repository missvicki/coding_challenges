// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n-1) * 1;
    }
}

factorial(4);
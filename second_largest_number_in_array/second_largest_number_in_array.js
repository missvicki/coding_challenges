function getSecondLargest(nums) {
    var biggest = nums[0];
    var nextbiggest = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            nextbiggest = biggest;
            biggest = nums[i];
        }
        else if (nums[i] > nextbiggest && nums[i] != biggest)
            nextbiggest = nums[i];
    }

    return(nextbiggest);
}

console.log(getSecondLargest([4,5,3,1]))

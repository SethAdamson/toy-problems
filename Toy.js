// Find the largest Even number

let listOfNums = [2, 5, 8, 23, 765, 2341, 757, 143326, 5786, 678, 35, 27, 235, 765, 14332654];


function largestEven(nums) {
    var largestEven = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i]% 2 === 0 && nums[i] > largestEven) {
        largestEven = nums[i];
        }
    }
    return largestEven;
}

console.log(largestEven(listOfNums));
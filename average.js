// Average
// Write a function that takes in an array of numbers as a parameter.
// You can assume all values in the array are numbers.
// Find the average of the numbers
// return the average.

// test data
var test1 = [1, 2, 3, 4, 5, 6, 7, '8', 9, 10]
var test2 = ['52', 6, 109, 99, 78, 3, 1, -6]

// Bonus Challenges
// Use a for of loop
// Use the reduce method.
// Before returning the average, round up to the nearest whole value.
// Only find the average of the even numbers.
// How would you handle if there were strings? some strings numbers some letters?


function average(arr) {
    let total = 0;
    for(let val of arr){
        total += +val;
    }
    return (total/arr.length);
}

console.log(average(test1));
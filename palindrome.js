// Palindrome
// Write a function that will return true or false if a given string is a palindrome or not.
// A palindrome is a string that is the same forwards and backwards.

// Example
// 'taco cat' returns true
// 'thomas the tank' returns false
// 'party trap' returns true

// Extra Bonus
// Have it the function be case insensitive
// Have it ignore are non alphabetic characters ' " ! ? ,

let s1 = 'taco cat';
let s2 = 'thomas the tank';
let s3 = 'par,ty trap?';
let s4 = 'racecar!!';


function palindrome(str) {
    let lower = str.toLowerCase().replace(/[^a-z]/g, '');
    let reverse = lower.split('').reverse().join('');
    return lower === reverse;
};

console.log(palindrome(s1));
console.log(palindrome(s2));
console.log(palindrome(s3));
console.log(palindrome(s4));



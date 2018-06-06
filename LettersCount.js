// Letter Frequency

// Write a function that will take in a single string.
// The function will tally how many times each letter appears in the string.
// The tally will be kept in an object with the property being the letter and the value being how many were found.
// Return the object with how the count of each letter found.

// Ignore Spaces
// Bob Ross -> {b: 2, o: 2, r: 1, s: 2}
// taco cat -> {t: 2, a: 2, c: 2, o: 1}

// Bonus Challenge
// Alter the function so it instead takes in two strings.
// We want to see if we rearrange the letters of the first string can we enough letters to make the second string.
// If that is possible return true, if it is not return false.
//('Bob Ross', 'bos ros') -> true
//('Bob Ross', 'boss ross') -> false
//('Bob Ross', 'tim allen') -> false


function letters (str) {
    let obj = {};
    let newStr = str.toLowerCase().replace(/[^a-z]/g, '')
    for(let prop of newStr) {
        if(obj[prop]){
            obj[prop]++
        } else if (!obj[prop]) {
            obj[prop] = 1;
        }
    }
    return obj;
};

console.log(letters('Bob Ross'));

function countLetter (str1, str2) {
    let newStr1 = letters(str1);
    let newStr2 = letters(str2);
    

}
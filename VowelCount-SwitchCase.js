// Write a function that, given a string, returns the number of vowels in that string.
// We will consider that a, e, i, o and u are vowels for the sake of this problem.
var vowelString = "Bob Ross can see the 4th dimension"; // -> 10
function vowelCounter(str) {
  let total = 0;
  str.toUpperCase().split('').forEach((item, i) => {
    switch (item) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        total++
        break;
    }
  })
    return total
}
console.log(vowelCounter(vowelString));

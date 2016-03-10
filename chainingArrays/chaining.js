// Using one single line of JavaScript code, complete the following tasks on the array of integers


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var sortedNumbers = integers

// Sort the numbers in descending order (10, 9, 8, 7, etc).
.sort(function(first, second) { return first - second; })
.reverse()

// Remove any integers greater than 19.
.filter(function(sortedNumber) {return sortedNumber < 19;})

// Multiply each remaining number by 1.5 and then subtract 1.
.map(function(newNum) { return newNum * 1.5 -1; })

// Calculate the sum of all the numbers
.reduce(function(prev, curr) {return prev + curr;});

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
console.log("sortedNumbers", sortedNumbers);

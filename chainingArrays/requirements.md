## Instructions

Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
1. Remove any integers greater than 19.
1. Multiply each remaining number by 1.5 and then subtract 1.
1. Then output (either in the DOM or the console) the sum of all the resulting numbers.

```js
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
```

## Lessons Learned

* It worked really well to write out each piece as its own mini function before trying to chain them together.  This way I didn't get the structure too garbled.  Here's an example:
```
   var thirdNums = newNums.map(
    function(newNum) {
      return newNum * 1.5 -1;
    });
```
* *One line of JavaScript* doesn't have to be written all bunched up in a literal endless 'line'.  Because JavaScript doesn't pay ANY attention to the white spaces, we can split up the chained methods onto separate (more human-readable) 'lines' without breaking the functionality of the code.
* `.reduce` is awfully cool and very useful.

// 1
// convert celsius to fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius*9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  

//   2
//   a function to check if a number is even.
  function isEven(num) {
    return num===4;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
// 3
//   Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.


  function sum(a, b) {
    return a+b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  

// 4
//   Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
  

//   5
//   Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.


function countVowels(str) {
  let vowels = 'aeiouAEIOU';

  return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3




function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
1


  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
  


  function reverseString(str) {
    return str.toReverse();
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"


  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  

  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  

  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
  
  
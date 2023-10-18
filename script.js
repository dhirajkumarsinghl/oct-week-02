"use strict mode";
// 1.Write a JavaScript function removeDuplicates(arr) that removes duplicate elements from an array arr and returns a new array with unique elements.
// Test Case:
// console.log(removeDuplicates([3, 3, 3, 3])); // Should return [3]
// console.log(removeDuplicates([])); // Should return []
let arr = [3, 3, 3, 3];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// 2.Write a JavaScript function isAnagram(str1, str2) that checks if two given strings str1 and str2 are anagrams of each other (contain the same characters in different orders).
// Test Case:
// console.log(isAnagram("hello", "world")); // Should return false
// console.log(isAnagram("rail safety", "fairy tales")); // Should return true

function areAnagram(str1, str2) {
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not same,
  // then they cannot be anagram
  if (n1 != n2) return false;

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (str1[i] != str2[i]) return false;

  return true;
}

/* Driver Code*/
let str1 = "hello";
let str2 = "world";

// Function Call
if (areAnagram(str1, str2))
  console.log("The two strings are" + " anagram of each other");
else console.log("The two strings are not" + " anagram of each other");

// 3.Write a JavaScript function isPerfectNumber(n) that checks if a positive integer n is a perfect number (a positive integer that is equal to the sum of its proper divisors, excluding itself).
// Test Case:
// console.log(isPerfectNumber(28)); // Should return true
// console.log(isPerfectNumber(12)); // Should return false

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(28);

is_perfect(12);

// 4.Write a JavaScript function getFibonacci(n) that generates the first n numbers in the Fibonacci sequence and returns them in an array.
// Test Case:
// console.log(getFibonacci(0)); // Should return []
// console.log(getFibonacci(1)); // Should return [0]

var fibonacci_series = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));

// 5.Write a JavaScript function capitalizeWords(str) that capitalizes the first letter of each word in a given string str.
// Test Case:
// console.log(capitalizeWords("this is a test")); // Should return "This Is A Test"

function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(capitalize_Words("this is a test"));

// 6.Write a JavaScript function findMissingNumber(arr) that finds and returns the missing number in an array of consecutive numbers from 1 to n.
// Test Case:
// console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8])); // Should return 5
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // Should return 12

function test(nums) {
  for (let n = 1; n <= nums.length + 1; n++) {
    if (nums.indexOf(n) === -1) return n;
  }
}

nums = [1, 2, 3, 4, 6, 7, 8];

console.log("Missing number of the said array: " + test(nums));
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("Missing number of the said array: " + test(nums));

// 7.Write a JavaScript function findCommonElements(arr1, arr2) that finds and returns an array containing the common elements between two arrays arr1 and arr2.
// Test Case:
// console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Should return [3, 4]
// console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // Should return []

var a = [1, 2, 3, 4];
var b = [3, 4, 5, 6];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i], b[j]);
    }
  }
}

// .Write a JavaScript function generateRandomNumber(min, max) that generates a random integer between min (inclusive) and max (inclusive).
// Test Case:
// console.log(generateRandomNumber(0, 100)); // Should return a random integer between 0 and 100
// console.log(generateRandomNumber(-50, 50)); // Should return a random integer between -50 and 50

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
  return console.log("Random Number between the range is : ");
}

console.log(randomNumber(0, 100));
console.log(randomNumber(-50, 50));

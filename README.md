# Problem Solving Patterns
## Theory

### Frequency Counters
This pattern uses objects or sets to collect values and frequencies of values.
This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

*Challenge 01* \
Write a function which takes in a string and returns counts of each character in the string

*Challenge 02* \
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

*Challenge 03* \
Given two strings, write a function to determine if the second string is an anagram of the first.

### Multiple Pointers
*Challenge 04* \
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

*Challenge 05* \
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

### Sliding Window
This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc.

*Challenge 06* \
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

### Divide and Conquer
*Challenge 07* \
Given a sorted array of integers, write a function called search, that accepts a value and returns the index
where the value passed to the function is located. If the value is not found, return -1

## Practice

### 1. Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities: \
Time: O(N)

Sample Input:
* sameFrequency(182,281) // true
* sameFrequency(34,14) // false
* sameFrequency(3589578, 5879385) // true
* sameFrequency(22,222) // false

### 2. Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
* areThereDuplicates(1, 2, 3) // false
* areThereDuplicates(1, 2, 2) // true
* areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
* Time - O(n)
* Space - O(n)

Bonus:
* Time - O(n log n)
* Space - O(1)

### 3. Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

* Time: O(N)
* Space: O(1)

Sample Input:
* averagePair([1,2,3],2.5) // true
* averagePair([1,3,3,5,6,7,10,12,19],8) // true
* averagePair([-1,0,3,4,5,6], 4.1) // false
* averagePair([],4) // false

### 4. Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

* isSubsequence('hello', 'hello world'); // true
* isSubsequence('sing', 'sting'); // true
* isSubsequence('abc', 'abracadabra'); // true
* isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
* Time Complexity - O(N + M)
* Space Complexity - O(1)

### 5. Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

* maxSubarraySum([100,200,300,400], 2) // 700
* maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
* maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
* maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
* maxSubarraySum([2,3], 3) // null

Constraints:
* Time Complexity - O(N)
* Space Complexity - O(1)

### 6. Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:
* minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
* minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
* minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
* minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
* minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
* minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
* minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Constraints:
* Time Complexity - O(N)
* Space Complexity - O(1)

### 7. Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

* findLongestSubstring('') // 0
* findLongestSubstring('rithmschool') // 7
* findLongestSubstring('thisisawesome') // 6
* findLongestSubstring('thecatinthehat') // 7
* findLongestSubstring('bbbbbb') // 1
* findLongestSubstring('longestsubstring') // 8
* findLongestSubstring('thisishowwedoit') // 6

Constraints:
* Time Complexity - O(n)
// Theory
// FREQUENCY COUNTERS - Challenge 01
function charCount(str) {
    // make an obj to return at the end
    let count = {};
    str = str.toLowerCase();
    // loop over string, for each character
    for (let countElement of str) {
        // if the char is alphanumeric && exists in the object, add 1
        if (/[a-z0-9]/.test(countElement)) {
            // access(or create) object key and adjust its value
            // ? do we create and access at the same time
            count[countElement] = ++count[countElement] || 1;
        }
    }
    // if the char is a special char, do nothing
    // return obj at the end
    return count;
}

// an alternative that does not use RegEx
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    return !(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123));

}

// an example of performance measure
// const t1 = performance.now();
// console.log(charCount("Hello THERE???"));
// const t2 = performance.now();
// console.log(t2 - t1);

// FREQUENCY COUNTERS - Challenge 02
// Challenge 02 - O(n^2)
function sameBasic(arr1, arr2) {
    // check if length is the same
    if (arr1.length !== arr2.length) {
        return false;
    }
    // take element of array 1 and find this element squared in array 2
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) {
            return false;
        }
        // if the element was found, remove it from array 2
        arr2.splice(index, 1);
    }
    return true;
}

console.log(sameImproved([1,2,3,3], [9,1,4,9]));

// Challenge 02 - O(n)
function sameImproved(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (const val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // ? is this supposed to be called value
    for (const key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;
}
// FREQUENCY COUNTERS - Challenge 03

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for (const char of str1) {
        counter1[char] = (counter1[char] || 0) + 1;
    }
    for (const char of str2) {
        counter2[char] = (counter2[char] || 0) + 1;
    }

    for (const key1 in counter1) {
        if (!(key1 in counter2)) {
            return false;
        }
        if (counter1[key1] !== counter2[key1]) {
            return false;
        }
    }
    return true;
}
// console.log(validAnagram("hello", "hellow"));


// MULTIPLE POINTERS - 04
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero([-3,-2,-1,0,1,2]))

// MULTIPLE POINTERS - 05
// professor's solution
// O(n)
function countUniqueValues2(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(arr);
    return i + 1;
}
// this one takes j out of bounds - MULTIPLE POINTERS - 05
function countUniqueValues1(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let uArr = [];
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        console.log(j);
        if (arr[i] !== arr[j]) {
            uArr.push(arr[i]);
        }
    }
    console.log(arr);
    return uArr.length;
}
function countUniqueValues3(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let j = 0;
    let uArr = [];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[j] !== arr[i]) {
            console.log(j);
            j++;
            uArr.push(arr[j]);
        }
    }
    console.log(uArr);
    return uArr.length;
}
// alt solution MULTIPLE POINTERS - 05
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let obj = {};
    for (const arrElement of arr) {
        obj[arrElement] = (obj[arrElement] || 0) + 1;
    }
    return Object.keys(obj).length;
}

// console.log(countUniqueValues2([1,1,1,1,1,2]));

// SLIDING WINDOW - 06
// O(n^2) solution
function maxSubarraySum1(arr, num) {
// handle edge case
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            console.log()
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
// SLIDING WINDOW - 06
// O(n) solution
function maxSubarraySum0(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// console.log(maxSubarraySumTest([4,2,1,6,2],4));
// re-wrote to practise
function maxSubarraySumTest(arr, num) {
    let temp = 0;
    let max = 0;
    // get first sub array sum
    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }
    max = temp;
    // 'slide'
    for (let i = 0; i < arr.length - num; i++) {
        temp = temp - arr[i] + arr[num + i];
        max = Math.max(max, temp);
    }
    return max;
}

// DIVIDE and CONQUER - 07
// binary search
function search(array, val) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

// console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13],4));

// PRACTICE
// 1. Frequency Counter - sameFrequency
function sameFrequency(numA, numB) {
    let objA = {};
    let objB = {};
    numA = numA.toString();
    numB = numB.toString();
    for (const elem of numA) {
        objA[elem] = (objA[elem] || 0) + 1;
    }
    for (const elem of numB) {
        objB[elem] = (objB[elem] || 0) + 1;
    }
    console.log(objA, objB)
    for (const objAKey in objA) {
        if (objA[objAKey] !== objB[objAKey]) {
            return false;
        }
    }
    return true;
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

// 2. Frequency Counter / Multiple Pointers - areThereDuplicates
function areThereDuplicates(...args) {
    let obj = {};
    for (const i of args) {
        obj[i] = (obj[i] || 0) + 1;
        if (obj[i] === 2) {
            console.log(obj);
            return true;
        }
    }
    console.log(obj);
    return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// 3. Multiple Pointers - averagePair
function averagePair(arr, n) {
    if (arr.length < 1) {
        return false;
    }
    let left = 0;
    let right = arr.length - 1;
    let average = 0;

    while (left < right) {
        average = (arr[left] + arr[right]) / 2;
        if (average === n) {
            return true;
        } else if (average < n) {
            left++;
        } else if (average > n) {
            right--;
        }
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
// console.log(averagePair([], 4)) // false

// 4. Multiple Pointers - isSubsequence
function isSubsequence(subSequence, sequence) {
    let i = 0;
    let result = "";
    for (let j = 0; j < sequence.length; j++) {
        if (subSequence[i] === sequence[j]) {
            i++;
            result += sequence[j];
        }
        if (result.length === subSequence.length) {
            return true;
        }
    }
    return false;
}

// console.log(isSubsequence('world', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

// 5. Sliding Window - maxSubarraySum
function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null
    }
    let temp = 0;
    let max = 0;
    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }
    max = temp;
    let j = 0;
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[j] + arr[i];
        if (temp > max) {
            max = temp;
        }
        j++;
    }
    return max;
}

// console.log(maxSubarraySum([100,200,300,400], 2)); // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
// console.log(maxSubarraySum([2,3], 3)); // null

// 6. Sliding Window - minSubArrayLen
function minSubArrayLen(arr, num) {
    if (arr.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = 0;

    while (left <= arr.length - 1) {
        if (sum < num) {
            if (right === arr.length) {
                break;
            }
            sum += arr[right];
            right++;
        } else if (sum >= num) {
            let currentLength = right - left;
            if (minLength === 0) {
                minLength = currentLength;
            } else if (minLength > currentLength) {
                minLength = currentLength;
            }
            sum -= arr[left];
            left++;
        }
    }
    console.log(minLength);
    return minLength;
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0

// 7. Sliding Window - findLongestSubstring


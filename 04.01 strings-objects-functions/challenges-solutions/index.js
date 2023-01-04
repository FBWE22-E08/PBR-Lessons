
// Return a string in reverse
//  ex:
//reverseString('hello')// === 'olleh';

const reverseString = (str) => {
  console.log(str.split("").reverse().join(""));
};

// const reverseString=(str)=>{
//     const newStr = '';
//     for(let i=str.length-1; i>=0 ; i--){
//         newStr += str[i]
//     }
//     return newStr;
// }

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//     }
//     return newString;
//     }
//     console.log(reverseString("hello"));

//console.log(reverseString('hello'))

// Return true if palindrome and false if not
// ex:

const isPalindrome = (word) => {
  word = word.toLowerCase();
  return console.log(word === word.split("").reverse().join(""));
};

console.log(2 === "2"); // false
console.log(2 == "2"); // true

// isPalindrome('racecar')
// isPalindrome('hello')

// Return an integer in reverse
// ex:

const reverseInt = (num) => {
  num += "";
  return num.split("").reverse().join("");
};

console.log(reverseInt(521));

// Return a string with the first letter of every word capitalized
//  ex:
//=== 'I Love Javascript';

const capitalizeLetters = (sentence) =>
  console.log(
    sentence
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")
  );

// function capitalizeLetters(words) {
//     let separateWord = words.toLowerCase().split(" ");
//     for (let i = 0; i < separateWord.length; i++) {
//     separateWord[i] =
//     separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
//     }
//     return separateWord.join(" ");
//     }

//console.log(capitalizeLetters('i love javascript'))

// Return the character that is most common in a string
// ex:


// const maxCharacter = (str) => {
//     const strObj = {};
//     let maxCount = 0;
//     let maxChar = "";
//     for (let char of str) {
//     strObj[char] = strObj[char] + 1 || 1;
//     }
//     for (let key in strObj) {
//     if (strObj[key] > maxCount) {
//     maxCount = strObj[key];
//     maxChar = key;
//     }
//     }
//     return maxChar;
//     };

var maxCharacter = function (str) {
  var max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

console.log(maxCharacter("javascriptzzzz"));

// const myObj = {
//     username: 'John',
//     age: 33
//     address:{
//         city: 'Berlin',
//         zipcode: 1234
//     }
// }

// const theKey = 'age'

// myObj[theKey]
// myObj['age']
// myObj.age

// myObj.address.city


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
const fizzBuzz = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else result.push(i);
  }
  return result;
};

console.log(fizzBuzz());

// CHALLENGE 7: LONGEST WORD

function longestWord(sen) {
  // SOLUTION 1
  //   let wordArray = sen.split(' ');
  //   let maxLength = 0;
  //   let result = '';
  //   for (let i = 0; i < wordArray.length; i++) {
  //     if (wordArray[i].length > maxLength) {
  //       maxLength = wordArray[i].length;
  //       result = wordArray[i];
  //     }
  //   }
  //   return result;

  //   // SOLUTION 2
  // Create filtered array
  // ex: sen = "My name is Brad"
  const wordArr = sen.toLowerCase().split(" "); // ["my", "name", "is", "brad"]
  // To only include nums/letters
  //    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length                        b-a
  const sorted = wordArr.sort((a, b) => b.length - a.length); // ["name", "brad", "my", "is"]

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );
  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

console.log(longestWord("Hi there, my name is Brad")); // === 'there,'
console.log(longestWord("My name is Brad")); // === ['name', 'brad']
console.log(longestWord("Brad")); // == 'brad'

// CHALLENGE 8: ARRAY CHUNKING
function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length nd push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // === [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // === [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]


// CHALLENGE 9: FLATTEN ARRAY
function flattenArray(arrays) {
  // SOLUTION 1
  return arrays.reduce((a, b) => a.concat(b) ,[]);
  // SOLUTION 2
  // return [].concat.apply([], arrays);
  // SOLUTION 3
  // return [].concat(...arrays);
  // SOLUTION 4
  // Infinity is the max depth to flatten
  //   return arrays.flat(Infinity);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]])); // === [1, 2, 3, 4,5, 6, 7]

// CHALLENGE 10: ANAGRAM
//              "elbow", "below"
function isAnagram(str1, str2) {
  const arr1 = str1.split("").sort(); // ["b","e","l","o","w"]
  const arr2 = str2.split("").sort(); // ["b","e","l","o","w"]
  return arr1.every((value, index) => value === arr2[index]);
}
console.log(isAnagram("elbow", "below")); // ==== true
console.log(isAnagram("Dormitory", "dirty room##")); //  === false

// CHALLENGE 11: ADD ALL NUMBERS
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur , 0);
}
console.log(addAll(2, 5, 6, 7)); // === 20;

// CHALLLENGE 12: SUM ALL PRIMES
function sumAllPrimes(num) {
  let total = 0;
  // Helper function to check primality
  function checkForPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  // Check all numbers for primality
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10)); // === 17;

// CHALLENGE 13: SEEK AND DESTROY
//               arr = [2, 3, 4, 6, 6, "hello"], rest = [2,6]
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val)); // [3,4, 'hello']
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // === [3,4, 'hello']

// CHALLENGE 14: EVENS AND ODDS

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  //         ternaryOp:  condition ? truthy : falsy
  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71])); // === [170,116]



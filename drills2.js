'use strict';

const spaceConverter = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += '%20';
    } else {
      newString += string[i];
    }
  }
  return newString;
};

// runtime complexity = O(n)

// console.log(spaceConverter('This is a test string'));

const filterArr = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// runtime complexity = O(n)

// console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const maxSum = arr => {
  let maxTotal = 0;
  let runningTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    runningTotal += arr[i];
    if (runningTotal > maxTotal) {
      maxTotal = runningTotal;
    }
  }
  return maxTotal;
};

// runtime complexity = O(n)

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

const mergeArr = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  newArr.sort((a, b) => {
    return a - b;
  });
  return newArr;
};

// we tried :(

// const mergeArr = (arr1, arr2) => {
//   const firstArr = arr1;
//   const secondArr = arr2;
//   let newArr = [];

//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] <= secondArr[0]) {
//       newArr.push(firstArr[i]);
//       firstArr.slice(1);
//     } else if (firstArr[i] > secondArr[0]) {
//       newArr.push(secondArr[0]);
//       secondArr.slice(1);
//     }
//   }
//   return newArr;
// };

// runtime complexity = O(pretty complex) could totaly be optimized :D

console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

const removeChar = (str, takerOuters) => {
  let newStr = str;
  let tempStr = '';

  for (let i = 0; i < takerOuters.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j] !== takerOuters[i]) {
        tempStr += newStr[j];
      }
    }
    newStr = tempStr;
    tempStr = '';
  }
  return newStr;
};

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'ae'));

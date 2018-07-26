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

// const mergeArr = (arr1, arr2) => {
//   const newArr = [...arr1, ...arr2];
//   newArr.sort((a, b) => {
//     return a - b;
//   });
//   return newArr;
// };

// we tried :(

const mergeArr = (arr1, arr2) => {
  const array = [...arr1, ...arr2];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

// runtime complexity = O(n^2)

// console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

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

const products = arr => {
  const arrayTotal = arr.reduce((product, value) => product * value);
  return arr.map(value => arrayTotal / value);
};
// console.log(products([10, 4, 5, 2, 1]));

// runtime complexity O(n)

const array2D = matrix => {
  const zeroRows = [];
  const zeroCols = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        row[j] = 0;
      }
    }
  }
  return matrix;
};

// console.log(
//   array2D([
//     [1, 0, 1, 1, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1]
//   ])
// );

const stringRot = (str1, str2) => {
  return (str2 + str2).indexOf(str1) !== -1;
};

// console.log(stringRot('amazon', 'azonam'));

'use strict';

const Array = require('./array');

function main() {
  const arr = new Array();
  Array.SIZE_RATIO = 3;

  arr.push(3);
  // Array { length: 1, capacity: 3, ptr: 0 }

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // Array { length: 6, capacity: 12, ptr: 3 }

  // Explain:
  // length is based on number of items,
  // capacity expanded to 12 because the resize method was triggered
  // once length exceeded capacity
  // ptr changes because when capacity is exceeded it will relocate to the next available memory block.

  arr.pop();
  arr.pop();
  arr.pop();

  // Array { length: 3, capacity: 12, ptr: 3 }

  // Explain:
  // length decreased by the number of pop()'s called
  // capacity remained the same because we did not have to relocate in physical memory
  // ptr remained the same because we did not have to relocate in physical memory

  //  console.log(arr);

  //  console.log(arr.get(0));

  // First item is 3

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');

  console.log(arr);

  console.log(arr.get(0));

  // Result was NaN, we believe that this is the case because
  // it is a "Float" array which only takes numeric value

  // resize() relocates the array data to a place in memory that
  // has enough contiguous blocks of memory to accomodate the
  // capacity requierments
}

main();

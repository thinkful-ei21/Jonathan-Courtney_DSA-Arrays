const Array = require('./array');

function main() {

    const arr = new Array();
    Array.SIZE_RATIO = 3;


    arr.push(3);
    // console.log(arr.memory.memory);

    // Length:
    // 1

    // Capacity:
    // 3

    // Pointer:
    // 0


    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}

main();

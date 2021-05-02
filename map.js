// you are not allowed to use a for loop

// code
const map = (callback) => (arr) => {
  /* exit case */
  // check if we reached the end of the array.
  // if you have reached it, return.
  /* recursive case */
  // here, we know we are not at the end.
  // we are going to call map with the next value.
};

const add1ToEach = map((item) => item + 1);

// tests
const actual = add1ToEach([1, 2, 3]);
const expected = [2, 3, 4];
console.log(`expected: ${expected}\nactual: ${actual} \n`);

/* iterative version */
// const result = [];
// for (item of arr) {
//   result.push(callback(item));
// }
// return result;

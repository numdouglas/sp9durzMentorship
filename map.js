// you are not allowed to use a for loop

// code
const map = (callback) =>(start_position)=> (arr) => {
  /* exit case */
  // check if we reached the end of the array.
  // if you have reached it, return.
  /* recursive case */
  // here, we know we are not at the end.
  // we are going to call map with the next value.

  /*recursive case: 
  through each iteration, the index of element we modify the array value and the array container 
  object are going to change, but the callback function will remain the same*/
  if(arr.length-start_position > 0){
    arr[start_position]=callback(arr[start_position]);

    return add1ToEach(++start_position)(arr);

  }

  //exit case
  else return arr;

};


const add1ToEach = map((item) => item + 1);

const add1ToEachFromZero = add1ToEach(0)

const actual = add1ToEachFromZero([1, 2, 3]);
// tests
const expected = [2, 3, 4];
console.log(`expected: ${expected}\nactual: ${actual} \n`);


/* iterative version */
// const result = [];
// for (item of arr) {
//   result.push(callback(item));
// }
// return result;

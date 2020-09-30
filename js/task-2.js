const isUniq = (element, index, arrb) => arrb.indexOf(element) === index;
const isEven = element => element % 2 === 0;

function filterArray(array, cb) {
  'use strict';
  // Write code under this line
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
console.log(cb (element, index, array));
    if (cb (element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr  = [1,2,3,4,5,1,2,5];
const arr1 = [ -2, 0 , 2];
const arr2 = [1, 1, 2];

console.log(filterArray(arr1, isUniq));
// console.log(filterArray(arr2, isUniq));
// console.log(filterArray(arr, isUniq));


// console.log(arr.indexOf(5));

// [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// [2, 4, 2]
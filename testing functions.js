let arrayValue = [1,2,6,4]
console.log(arrayValue)

function size(value) {
  return arrayValue.length;
}

function has(value) {
  return arrayValue.includes(value);
}

//isEqual(other_set) - Given another set, return true if the two sets contain the same elements and are the same size.

function isEqual(other_set) {
  if (arrayValue.length != other_set.length)
  return false;

  for (let i = 0; i < arrayValue.length; ++i) {
    if (arrayValue[i] !== other_set[i])
    return false;
  }
  return true;
}

//toArray() - Return the content of the set as a plain Javascript array.
//If you're using an array to store your set, make a copy of the array to return, instead of returning your internal data.
//Passing back just "this._data" would let the outside world mess with the internal MySet data.

function toArray() {
let new_array = [];
  for (let i = 0; i < arrayValue.length; i++) {
  new_array.push(arrayValue[i]);
  }
return new_array;
}


//forEach(callback) - Invokes the given callback function once for each element in the set, passing that element as the function's parameter.

// function forEach(callback) {
// let new_array = [];
//   for (let i = 0; i < arrayValue.length; i++) {
//     let data = callback(arrayValue[i]);
//     new_array = add(data);
//   }
//   return new_array;
// }
// function forEach(callback) {
//   for (let i = 0; i < arrayValue.length; i++) {
//     callback(arrayValue[i]);
//   }
// }

//clone() - Returns a new, independent MySet object with the same data.
//Adding data to the cloned object should not affect the contents of the original.

function clone() {
  let clone_array = arrayValue.slice()
    return clone_array;
}



let array_2 = 6
let array_3 = [1,2,3,4]

console.log(size(arrayValue));
console.log(has(array_2));
console.log(isEqual(array_3));
console.log(toArray());
console.log(clone());
// console.log(forEach(has(2)));
// console.log(forEach(has(3)))



     // First, implement the basic class and decide how you'll store the data internally.
     // Write a constructor that takes an optional parameter. If the parameter is blank, the set starts off empty.
     // Otherwise, the parameter will be an array of initial data.
     // Note that that array isn't a set and may have duplicate data!
class MySet {

  constructor(arrayValue) {
      if(Array.isArray(arrayValue)) {
          this._arrayValue = arrayValue;
        } else {
          this._arrayValue = [];
      }
 }

  add(new_value) {
    if (!this._arrayValue.includes(new_value)) {
      this._arrayValue.push(new_value);
    }
  }

 remove(new_value){
    for (let i = 0; i < this._arrayValue.length; i++){
      if (this._arrayValue[i] === new_value){
        this._arrayValue.splice(i, 1);
      }
    } //return this._arrayValue;
 }

  size() {
    return this._arrayValue.length;
  }

  has(value) {
    return this._arrayValue.includes(value);
  }
  //isEqual(other_set) - Given another set, return true if the two sets contain the same elements and are the same size.
  isEqual(other_set) {
    if (this._arrayValue.length != other_set.length)
    return false;
    for (let i = 0; i < this._arrayValue.length; ++i) {
      if (this._arrayValue[i] !== other_set[i])
      return false;
    }
    return true;
  }
  //toArray() - Return the content of the set as a plain Javascript array.
  //If you're using an array to store your set, make a copy of the array to return, instead of returning your internal data.
  //Passing back just "this._data" would let the outside world mess with the internal MySet data.
  toArray() {
    let new_array = [];

    for (let i = 0; i < this._arrayValue.length; i++) {
    new_array.push(this._arrayValue[i]);
    }
    this._arrayValue = this._arrayValue.filter((v, i, a) => a.indexOf(v) === i);
    return this._arrayValue;
  }
  // forEach(callback) - Invokes the given callback function once for each element in the set, passing that element as the function's parameter.

  forEach(callback) {

    for (let i = 0; i < this._arrayValue.length; i++) {
      let value = this._arrayValue[i];
      return callback(value);
    }
  }


  //clone() - Returns a new, independent MySet object with the same data.
  //Adding data to the cloned object should not affect the contents of the original.
  clone() {
    let clone_array = this._arrayValue.slice();
    return clone_array;
    // console.log(clone_array);
  }
}

  let ms1 = new MySet();
  console.log(ms1)
  ms1.add(4);
  ms1.add(4);
  ms1.add(5);
  ms1.add(6);
  ms1.remove(5);
  console.log(ms1.toArray());
  // prints [4,6]
  let ms2 = new MySet([1,2,1,3]);
  console.log(ms2)
  console.log(ms2.toArray());
  // prints [1,2,3]
  console.log(ms2.has(3)); // true
  console.log(ms2.size()); // 3

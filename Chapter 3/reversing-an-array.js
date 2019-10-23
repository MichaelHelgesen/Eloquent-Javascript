
// take an array as argument
// create a new array
// return the new array with the values from the one passed in in reverse
const reverseArray = (array) => {
    let reverseArray = [];
    for (i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

// take an array as argument
// return the array with the values in reverse

// From internet
var reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (i = 0; i < arrLength; i++) {
        array.splice(i, 0, array.pop());
    }
}

// From Eloquent Javascript
function reverseArrayInPlace2(array) {
    //console.log(Math.floor(array.length / 2));
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
  }

  let arrayOne = [1,2,3,4,"w"];
  let arrayTwo = [1,2,3,4,"w"];
  let arrayThree = [1,2,3,4,"w"];

  reverseArray(arrayOne);
  reverseArrayInPlace(arrayTwo);
  reverseArrayInPlace2(arrayThree);

  console.log(arrayOne);
  console.log(arrayTwo);
  console.log(arrayThree);
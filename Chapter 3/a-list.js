// Example
var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

// Return an object
// For each value in the array, return a new object that has the next value as a link.
const arrayToList = (array) => array.length === 1 ? { value: array[0], rest: null } : { value: array[0], rest: arrayToList(array.slice(1)) };

// Turn an object into an array
const listToArray = (list) => {
    let arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value)
    }
      return arr;
};

// Put an element in front of a list
const prepend = (elem, list) => {
    return {
        value: elem,
        rest: list
    }
};

// Return the element at given position or undefined
const nth = (list, num) => {
    let count = 0;
    for (var node = list; node; node = node.rest) {
        count++
        if (count === num) {
            return node.value;
        } 
    }
};

const nthRecursive = (list, num) => {
    if (num === 1) {
        return list.value;
    } else if (list.rest === null || num < 0) {
        return undefined
    } else {
        return nthRecursive(list.rest, num = num -1);
    }
};


let arrayList = arrayToList([1, 2, 3])
//console.log(arrayToList([1, 2, 3]));
//console.log(listToArray(arrayList));
//console.log(prepend(10, prepend(20, null)));
//console.log(nth(arrayToList([10, 20, 30]), 5));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
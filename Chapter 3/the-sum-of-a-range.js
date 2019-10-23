// NOT MY SOLUTION
// step parameter is optional
// if step is not passed in, 
// and start is less than or equal to end, 
// then step = 1, else step = -1
function range(start, end, step = start <= end ? 1 : -1) {
    let result = [];
    // loop iterates up for positive step values
    // and iterates down for negative step values
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
      result.push(i);
    }
    return result;
  }

const sum = (array) => array.length === 0 ? 0 : array[0] + sum(array.slice(1))

console.log(sum(range(1, 10)));


// MY SOLUTION - NON SHORTENED
/*
const range = (start, end) => {
    if (end === start) {
        return [start];
    } else {
        var numbers = range(start, end - 1);
        numbers.push(end);
        return numbers;
    }
};

const sum = (array) => {
    if (array.length === 0) {
        return 0;
    } else {
        //console.log(array);
        var recursion = array[0] + sum(array.slice(1));
        console.log(recursion);
        //console.log(array);
        return recursion;  
    } 
}
*/

// What happens here is that every recursion call gets saved to the stack. They don´t start returning after
// reaching the base case. So when the array has no length, the first result coming back to us is 10 + 0.
// Then it continues down the stack, all the way down to when the array was full, giving us 54 + 1

// This is how its summed up:
// 10 [10]
// 19 [10, 9]
// 27 [8, 9, 10]
// 34 [7, 8, 9, 10]
// 40
// 45
// 49
// 52
// 54
// 55


// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 4, 5, 6, 7, 8, 9, 10 ]
// [ 5, 6, 7, 8, 9, 10 ]
// [ 6, 7, 8, 9, 10 ]
// [ 7, 8, 9, 10 ]
// [ 8, 9, 10 ]
// [ 9, 10 ]
// [ 10 ]
// [ 10 ]
// [ 9, 10 ]
// [ 8, 9, 10 ]
// [ 7, 8, 9, 10 ]
// [ 6, 7, 8, 9, 10 ]
// [ 5, 6, 7, 8, 9, 10 ]
// [ 4, 5, 6, 7, 8, 9, 10 ]
// [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
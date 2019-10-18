// Zero is even
// One is odd
// Any other number N, its evenness is N - 2

const isEven = (num) => {
    if (num < 0) {
        return
    } else if (num === 0) {
        return true
    } else if (num === 1) {
        return false
    } else {
        return isEven(num - 2);
    }   
}

console.log(isEven(5));
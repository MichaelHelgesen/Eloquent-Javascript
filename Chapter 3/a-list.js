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
    let count = 0;
    if (count === array.length) {
        return array[0];
    } else {
        count++
        array[0] += sum(array[count]);  
    }
    
}


console.log(sum(range(1, 10)));
let count = 0;

for (i = 0; i < 100; i++) {
    count++;
    if (count % 3 === 0 && count % 5 === 0) {
        console.log("FizzBuzz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(count);
    } 
};
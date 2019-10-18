
const countChar = (string, char) => string.split("").filter(function (element) {
        return element === char; 
    }).length;

/*
const countChar = (string, char) => {
    numberOfChars = 0;

    for (i = 0; i < string.length; i++) {
        if (string[i] === char) {
            numberOfChars++
        }
    }
    return numberOfChars;
}*/

console.log(countChar("Beacause BBans are Best", "r"));

const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element) {
//     return element * element;
// }
// console.log(output);
// cons square = element => element * element; (function decleration)
// const result = numbers.map(element => element * element);

const result = numbers.map(function (element) {
    return element * element;
})

console.log(result);

const bigger = numbers.filter(element => element > 5);
console.log(numbers);
console.log(bigger);

const isThere = numbers.find(element => element > 5);
console.log(isThere);
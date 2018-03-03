
// 'arguments' object no longer bound with arrow functions
// const add = function (params) {
//     console.log(arguments[0]);
// }

// const add =  (params) => {
//     console.log(arguments);
// }

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())
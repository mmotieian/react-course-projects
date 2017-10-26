// const square = function (x) {
//     return x * x;
// };

// console.log(square(2));


// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;
// console.log(squareArrow(4));



// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => {
    return (fullName && fullName.split(' ')[0]);
}

console.log(getFirstName('Mohammad Najar'));


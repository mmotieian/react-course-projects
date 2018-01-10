console.log('utils.js is running');

const square = (a) => a * a;
export const add = (a, b) => a + b;

export function minus(a, b) {
    return a - b;
}


export {square};
//exports 1- default export 2- named exports
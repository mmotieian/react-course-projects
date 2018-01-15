console.log('utils.js is running');

const square = (a) => a * a;
export const add = (a, b) => a + b;

export function minus(a, b) {
    return a - b;
}

const subtract = (a, b) => a - b;
// or
// export default (a, b) => a - b;
// and remove from export in the line below


export {square, subtract as default};
//exports 1- default export 2- named exports
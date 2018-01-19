import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;

ReactDOM.render(template, document.getElementById('app'));

// ------------------------------------------------

// import validator from 'validator';
// const email = 'test@yahoo.com';
// console.log('the email format ',email,' is: ',validator.isEmail(email));

// ------------------------------------------------
// import subtract, {add, square, minus} from "./utils";
//
// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(1, 2));
//
// console.log(minus(4, 3));
//
// console.log(subtract(4, 3));

// ------------------------------------------------

// import isSenior, {isAdult, canDrink} from "./person";
//
// console.log(canDrink(21) ? 'can drink' : 'cannot drink');
// console.log(isAdult(17) ? 'is adult' : 'is not adult');
// console.log(isSenior(65) ? 'is Senior' : 'is Junior');


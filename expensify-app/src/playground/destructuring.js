// ---------  Object destructuring ------------

// const person = {
//     name: 'Mohammad',
//     age: 33,
//     location: {
//         city: "Plano",
//         temp: 75
//     }
// };
//
// // default value for name for non-existing name
// const {name = "Anonymous", age, location} = person;
// console.log(`${name} is ${age}.`);
//
// // renaming a param
// const {city, temp: temperature} = location;
// console.log(`It's ${temperature} in ${city}.`);
//
// // -----------------------------------
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self Published'} = book.publisher;
// console.log(`publisher Name is ${publisherName}.`);

// ---------  Array destructuring ------------

const address = ['4305 Evenstar Way', 'Plano', 'Texas', '75074'];
const [, city, ...rest] = address;

console.log(`You are in ${city}, ${rest[0]}`);
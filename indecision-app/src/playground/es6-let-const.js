var nameVar = 'Mohammad';
console.log('nameVar: ', nameVar);

let nameLet = 'Mohammad';
console.log('nameLet: ', nameLet);

const nameConst = 'Mohammad';
console.log('nameConst: ', nameConst);


function getPetName() {
    var petName = 'Hal';
    return petName;
}

console.log(getPetName());


// Block scoping
var fullName = 'Mohammad Najar';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// firstName undefined if defined as 'const' or 'let'
console.log(firstName);
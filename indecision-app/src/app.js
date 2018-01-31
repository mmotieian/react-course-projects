import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));

//---------------------------

class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }

    getGreeting() {
        return `Hi ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

//---------------------------
// Below is made possible by using
// babel's transform-class-properties
// library

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const getGreeting2 = newSyntax.getGreeting;
console.log(getGreeting2());
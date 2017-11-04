class Person {


    // constructor(name){
    //     this.name = name || 'test';
    // }

    // Or
    constructor(name = 'test', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return "Hi " + this.name + "!";
    }

    getDescription() {

        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// -------------------------------------

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Major is ${this.major}.`;
        }

        return description;
    }
}

// const me = new Student('Mohammad Najar', 33, 'Computer Engineering');
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getDescription());
//
// const other = new Student();
// console.log(other);
// console.log(other.hasMajor());
// console.log(other.getDescription());

// -------------------------------------

class Traveler extends Person {

    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    getGreeting() {

        return `Hi. I am ${this.name}.`;
    }


    hasLocation() {
        return !!this.location;
    }

    getDescription() {

        let description = super.getDescription();
        description += this.hasLocation() ? ` I'm visiting from ${this.location}.` : '';
        return description;
    }

}


const me = new Traveler('Mohammad Najar', 33, 'Dallas');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getGreeting());
console.log(other.getDescription());


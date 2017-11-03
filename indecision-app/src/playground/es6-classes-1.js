
class Person {


    // constructor(name){
    //     this.name = name || 'test';
    // }

    // Or
    constructor(name = 'test', age = 0){
        this.name = name ;
        this.age = age;
    }

    getGreeting(){
        return "Hi " + this.name + "!";
    }

    getMyName(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Mohammad Najar', 33);
console.log(me.getGreeting());
console.log(me.getMyName());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getMyName());
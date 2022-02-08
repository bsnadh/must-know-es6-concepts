/**
 * 
 * arrow function is alternative to traditional function expression
 * but it can't be used in all situations
 * 
 * can not be used as constructors
 * the methods  bind, call and apply will have no effect on arrow functions
 * 
 * an arrow func doesn't have its own this value and arguments object
 * therefore it shouldn't be used for functions that uses arguments object 
 */

class Person {
    constructor(name) {
        this.name = name
    }
//arrow function  
 arrowName() {
    setTimeout(() => {
        console.log('Arrow: '+this.name)
    }, 100);
}
//standard function
 functionName() {
    setTimeout(function() {
        console.log('Function: '+this.name)
    }, 100);
}
}

let person = new Person('Ram')

//compare the outputs to see how 'this' behaves on two different types of functions

person.arrowName()
person.functionName()
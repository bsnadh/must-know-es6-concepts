/*
    The destructuring assignment syntax is a javascript
    expression which makes it easier to take properties from
    objects, take values from arrays, into distinct
    variable
*/

//array destructuring

const vehicles = ['Tesla', 'Tata', 'Toyota'];

const [car, truck, suv] = vehicles;
console.log(car);

// object destructuring

const person = {
    name: 'Ram',
    age: 45,
    address: 'ktm',
    phone: 0111111
}

personInfo(person);

function personInfo({name,address}) {
    console.log(`${name} lives in ${address}`);
}
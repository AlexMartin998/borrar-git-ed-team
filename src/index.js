'use strict';

console.log('Hellow World');

const greet = (name) => `Hi ${name}`;
greet('Alex');


// // Object
const user = {
	name: 'Alex',
	os: 'Arch Linux',
	age: 23,
}

console.log(user);


// // Classes
class Person {
	constructor(name, age = 12, so = 'Linux') {
		this.name = name;
		this.age = age;
		this.so = so;
	}

	greeter() {
		return `Hellow ${this.name}.`;
	}
}

const alex = new Person('Alex');
const moni = new Person('Moni');
const sam = new Person('Sam');



console.log(alex);

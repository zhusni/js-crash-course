/* multi
line
comment */


// variables : let, const
// primitive data types: String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);


// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// Method : length, toLowerCase, toUpperCase, substring, split
const s = 'Hello World!';
console.log(s.substring(0, 5).toUpperCase());

const l = 'technology, computers, it, code';
console.log(l.split(', '));

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries'); // fill in new array

fruits.pop(); // clear the last array

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));
console.log(fruits);


const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sport'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'MA'
	}
}

console.log(person.address.city);
const {firstName, lastName, address: { city }} = person;
console.log(city);

person.email = 'john@gmail.com'

console.log(person);


const todos = [
{
	id: 1,
	text: 'Take out trash',
	isCompleted: true
},
{
	id: 2,
	text: 'Meeting with boss',
	isCompleted: true
},
{
	id: 3,
	text: 'Dentist appt',
	isCompleted: false
}
];

for(let i = 0; i < todos.length; i++)
{
	console.log(todos[i].text);
}


console.log(todos);

// json is data format and its used a lot within full stack dev and using API when 
// u sending data to a server usually send it in JSON format and receive in JSON format


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for
for(let i = 0; i < 10; i++)
{
	console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while(i < 10) {
	console.log(`While Loop Number: ${i}`);
	i++;
}

// forEach, map, filter
todos.forEach(function(todo)
{
	console.log(todo.text);
});

const todoText = todos.map(function(todo)
{
	return todo.text;
});

console.log(todoText);



const todoCompleted = todos.filter(function(todo)
{
	return todo.isCompleted == true ;
}).map(function(todo)
{
	return todo.text;
});

console.log(todoCompleted);

// contional
const xx = 6;
const yy = 10;

if(xx > 5 && yy > 10) {
	console.log('x is more 5 or y is more than 10');
} ;


const z = 11;

// ? represent 'then' eg: ? 'true' : 'false'
const color = x > 10 ? 'red' : 'blue';

switch(color){
case 'red': 
	console.log('color is red');
	break;
case 'blue': 
	console.log('color is blue');
	break;
default: 
	console.log('color is NOT red or blue');
	break;


	// function

const addNums = num1  => num1 + 5;

console.log(addNums(4));

todos.forEach((todo) => console.log(todo));
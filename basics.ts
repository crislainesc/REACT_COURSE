// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string = 'user';

userName = 'Max';

let isInstructor: boolean;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Type Aliases
type Person = {
	name: string;
	age: number;
};

//

let person: {
	name: string;
	age: number;
};

person = {
	name: 'Max',
	age: 12,
};

// person = {
// 	isEmployee: true,
// };

let people: Person[];

// Type inference

// let course = 'React - the complete guide'

// course = 12;

// Union Types

let course: string | number = 'React - the complete guide';

course = 12;

// Functions & types

function add(a: number, b: number) {
	return a + b;
}

function print(value: any) {
	console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // [-1, 1, 2, 3]

stringArray[0].split('');

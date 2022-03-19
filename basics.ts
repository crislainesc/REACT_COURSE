// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string = "user";

userName = "Max";

let isInstructor: boolean;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

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
	name: "Max",
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

let course: string | number = "React - the complete guide";

course = 12;

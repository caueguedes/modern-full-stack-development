// String
const bestShowEver: string = "Babylon 5";

// Number
const a: number = 42;
const b: number = 3.14;

const a: number = OxfOOd; //hexa
const a: number = Oo744; //octa

// Bollean
const isThisTheBestBookEver: boolean = true;
const isThisTheBestBookEver: boolean = 1; //  Compiler error

// Any
let food: any = "pizza";
let accountBalance;
accountBalance = 15000;
accountBalance = "15000";

// Array 
const pets: string[] = [ "Belle", "Bubbles" ];

// Tuple 
const authors: [ string, number ] = [ "Frank", 46 ];

// Enums 
enum Food { Pizza, FriedChicken, IceCream };
enum Food { Pizza, FriedChicken = 500, IceCream };

// Functions 
let myMathFunction: (num1: number, num2: number) => string;
function add(n1: number, n2: number): string {
  return "" + n1 + n2;
}
myMathFunction = add;


// Object
let person: {
  firstName: string, lastName: string, age: number
} = {
  firstName : "John", lastName : "Sheridan", age : 52
};


// Type-aliases
type PersonType = {
  firstName: string, lastName: string, age: number
};
let person2: PersonType = {
  firstName : "Michael", lastName : "Garibaldi", age : 53 };

// Union types
let myAge: number | string
myAge = 46;   // valid
myAge = "46"; // valid
myAge = true; // erro
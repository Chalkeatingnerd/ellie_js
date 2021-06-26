// 1. String concatenation

console.log('my' + 'cat');
console.log('----------------');
console.log('1' + 2);
console.log('----------------');
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('----------------');
// string literals supports break without break assertion
console.log(`string literals:
''''
asdasdads`);
console.log('----------------');
console.log("ellie's \n\tbook");
console.log('----------------');

//2. numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 2); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation
console.log('----------------');
let counter = 2;

console.log('----------------');
//3. Increment and decrement operators
//preIncrement & postIncrement
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;

// 4. Assignment operators
// += -= *= /=

// 5. Comparison operators

// 6. Logical operators
//  || (or)
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i=0; i < 10; i++) {
        console.log('🤪');
    }
    return true;
}

console.log('----------------');
// 7. Equality Operators
const StringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion
console.log(StringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true



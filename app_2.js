// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym2);
// BNo two Symbols() can be the same
console.log(Symbol('123') === Symbol('123'));
console.log(`Hello ${sym1.toString()}`);


// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};


// Use bracket syntax to for actual variable
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';


console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not numerable in for... in

for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON. Stringify()

console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
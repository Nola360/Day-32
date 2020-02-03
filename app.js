// // Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   // Return object the has a next function 
//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// Create an array of names

// const namesArray = ['James', 'Bond', 'Kevin', 'Heart'];

// Init iterator and pass in the names array
// const names = nameIterator(namesArray);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// Generator Example
function* sayNames() {
  yield 'James';
  yield 'Bond';
  yield 'Kevin';
  yield 'Heart';

}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creater - continuously create ids
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}


const gen = createIds();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// const eunkwang = {
//   name: 'eunkwang',
//   age: 28,
//   address: 'yakuin',
//   future: false,
//   fat: true,
// };
//
// printout keys of eunkwang
// for (key in eunkwang) {
//   console.log(key);
// }
//
// printout values of eunkwang
// for (key in eunkwang) {
//   console.log(eunkwang[key]);
// }

//object eunkwang maker
//traditional way
// function makeEunkwang(name, age, address, future, fat) {
//   return {
//     name: name,
//     age: age,
//     address: address,
//     future: future,
//     fat: fat,
//   };
// }
//
// const eunkwang2 = makeEunkwang('eunkwang2', 13, 'nope', false, true);
// console.log(eunkwang2.address);

// use - Constructor function, naming convention - PascalNaming, make object - new Operator
// function MakeEunkwang (name, age, address, future, fat) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.future = future;
//   this.fat = fat;
// }
//
// const eunkwang2 = new MakeEunkwang('eunkwang2', 13, 'nope', false, true);
// console.log(eunkwang2.address);
// console.log(eunkwang2['address']);

// //2 headed 1bodied eunkwang - cloned eunkwang2 and eunkwang's reference points at the same object in memory
// const eunkwang = {
//   name: 'eunkwang',
//   age: 13,
//   leg: 2,
//   arms: 2,
//   head: 2,
// };
//
// const eunkwang2 = eunkwang;
//
// console.log(eunkwang2.name);
// eunkwang2.name = 'aisac';
// console.log(eunkwang.name); // i am you, you are me

// const eunkwang = {
//   name: 'eunkwang',
//   age: 13,
//   leg: 2,
//   arms: 2,
//   head: 2,
// }
//
// const eunkwang2 = {};
// Object.assign(eunkwang2, eunkwang);
// eunkwang2.name = 'aisac';
// console.log(eunkwang.name);
// console.log(eunkwang2.name);

// const eunkwang = {
//   name: 'eunkwang',
//   age: 13,
//   leg: 2,
//   arms: 2,
//   head: 2,
// }
//
// const eunkwang2 = Object.assign({}, eunkwang);
// console.clear();
// eunkwang2.name = 'aisac';
// console.log(eunkwang.name);
// console.log(eunkwang2.name);








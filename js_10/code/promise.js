'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending → fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// const promise = new Promise((resolve, reject) => {
//   //doing some heavy work(network, read files)
//   console.log('doing something...');
//   setTimeout(() => {
//     resolve('ellie');
//     reject(new Error('no network'));
//   }, 2000);
// });

// 2. Consumers: then, catch, finally
// promise.then((value) => {
//   console.log(value);
// }).catch(error => {
//   console.log(error);
// });
//when promise worked successfully, gets the parameter which resolve() passes
//if the promise process does not work properly,

// 3. Promise Chaning

// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//
// fetchNumber.then( value => value *= 2 )
// .then( value => value *=3 )
// .then( value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value -1), 1000);
//   });
// })
// .then( value => console.log( value ))
// .finally(() => {
//   console.log('end of Promise');
// });

// chicken example

const getHen = () =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve('🐔'), 1000);
    setTimeout(() => {
      resolve('🐔');
      reject('chicken is missing');
    },1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => {
      resolve(`${hen} => 🥚`);
      reject(`since there's no chicken, there's no egg`);
    },1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    setTimeout(() => {
      resolve(`${egg} => 🍳`);
      reject(`since there's no egg, there's no meal`);
    })
  });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(`today's meal is ${meal}`));
// same as down below
getHen()
.then(getEgg)
.catch(console.log)
.then(cook)
.catch(console.log)
.then(meal => console.log(`today's meal is ${meal}`))
.catch(console.log);




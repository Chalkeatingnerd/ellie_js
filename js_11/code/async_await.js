'use strict';

//promise pattern

// const user = {
//   id: 'dabthesoul',
//   password: 'ordinary12'
// };
//
// function fetchUser() {
//   //do network request in 10 secs...
//   return new Promise(((resolve, reject) => {
//     resolve(user);
//     reject(new Error('invalid user information'));
//   }))
// }
//
// const fetchedUser =
//     fetchUser()
//     .then((user) => {
//       console.log(`your id is ...${user.id}`);
//       console.log(`your password is ... ${user.password}`);
//     })
//     .catch(console.log)
//     .finally(() => {
//       console.log('end of promise');
//     });


// 1. async

async function fetchUser() {
  //do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
  await delay(3000);
  return '🍏';
}

async function getBanana() {
  await delay(3000);
  return '🍌';
}

function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`)
  });
}











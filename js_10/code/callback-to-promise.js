//call back hell example

// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//           (id === 'ellie' && password === 'dream') ||
//           (id === 'coder' && password === 'academy')
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error('not found'));
//       }
//     }, 2000);
//   }
//
//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === 'ellie') {
//         onSuccess({name: 'ellie', role: 'admin'});
//       } else {
//         onError(new Error('no access'));
//       }
//     }, 1000);
//   }
// }
//
// const userStorage = new UserStorage();
//
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(
//     id,
//     password,
//     (user) => {
//       console.log('loading your role data');
//       userStorage.getRoles(
//           user,
//           userWithRole => {
//             alert(`Hello ${user.name}, you have a ${user.role} role`);
//           },
//           error => {}
//       )
//     },
//     (error) => {
//       console.log(error);
//     }
// )

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) =>  {
      setTimeout(() => {
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) =>  {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({name: 'ellie', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();

userStorage
  .loginUser('ellie', 'dream')
  .then(userStorage.getRoles)
  .catch(console.log);


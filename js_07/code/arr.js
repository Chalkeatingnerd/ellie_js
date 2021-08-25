const arr = [];
arr.push(41);
arr.push(25);
arr.push(5);

// for ( value of arr) {
//   console.log(value);
// }

arr.forEach(function(values, index, array) {
  console.log(values, index, array);
});

arr.forEach((values, index) => console.log(values, index));

const arr2 =[];
arr2.push(57);
arr2.push(15);
arr2.push(37);
arr.concat(arr2);

Array.from(arr2);



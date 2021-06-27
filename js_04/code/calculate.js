let add = function(x, y) {
  return x + y;
};
console.log(add(1,2));

// make it into arrow function

add = (x, y) => x + y;
console.log(add(1,2));

console.log('---------------------');

// printout remainders of even number and odd number input
const evenOddCheck = function (inputNumber) {
  if(inputNumber%2 === 1)
    console.log('odd');
  else
    console.log('even');
};

const printRemainders = function (message = 'print remainder...', inputNumber ,evenOddCheck) {
  console.log(message);
  console.log('---');
  evenOddCheck(inputNumber);
  console.log('------');

}
printRemainders(undefined,3,evenOddCheck);
printRemainders('hello',2,evenOddCheck);

console.log('---------------------');







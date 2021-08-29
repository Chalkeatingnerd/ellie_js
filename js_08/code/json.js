let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

console.log('------------------------');

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

console.log('------------------------');
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);




















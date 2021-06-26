const kwang = { name: '김은광', age: 28, height: 181}
console.log(`name: ${kwang.name}, age: ${kwang.age}, height: ${kwang.height}`);

kwang.age = '박은광';
kwang.age = 82;
kwang.height = 818;
console.log(`name: ${kwang.name}, age: ${kwang.age}, height: ${kwang.height}`);

// kwang = { name: '이은광', age: 10}; // reallocaiton impossible

# js_summary04

## intro & procecural langauge

프로그램 내에는 저마다의 기능을 수행하는 functions들이 있는데, js와 같은 `절차지향 언어(procedural language)`의 경우, 함수가 프로그램에서 굉장히 중요한 기능을 담당한다.

`javascript에도 class가 추가`됐기 때문에 OOP라고 생각할 수도 있지만, 추가된 클래스도 자바언어처럼 pure한 OOP가 아니라, `prototype를 base로한 가짜의 Object-Oriented`이다.

function이 굉장히 중요한 기능을 담당하고 있기 때문에, 때로는 sub-program이라고도 부른다.

우리는 언어 자체에 존재하는 function들을 쓸 때 또는 `API` (Application Programming Interface)를 쓸 때, 함수의 이름을 보고 함수의 기능을 가늠한다. 때문에 함수 네이밍이 굉장히 중요!

또한, 전달해야 하는 `parameter`과, 어떤 값이 `return`되는지 `interface`를 보고 예상할 수 있다. 때문에 함수의 input, output, function을 잘 지정하는 것이 중요하다.

## function

**function정의**

  ```js
  function name(param1, param2) { body(business logic)... return;}
  ```

  * `하나의 함수는 한가지의 일만 하도록 만들어야 한다.`⚠️ 

  * function의 naming은 noun형이 아닌 `command, verb형으로 지어야 한다.`⚠️
    e.g. createCardAndPoint( ❌) → createCard & createPoint

  * javascript에서는 function이 first-class function이기 때문에, object로 간주되어진다. → function을 변수로 할당 / parameter로 전달 / return으로 전달 가능
      
  * ```js
    function log(message) {
      console.log(message);
    }
    log('Hello');
    log(1234);
    ``` 
    javascript에서는 type이 없기 때문에, 함수의 형태만 보고 parameter을 가늠하기 힘들다. 위와 같은 경우엔, 위나 아래나 알아서 문자열로 출력하겠지만, 다른 프로젝트에서 parameter의 타입이 중요한 경우, 곤란할 수 있다.

## TypeScript Example

```typescript
function log(message: string): number{ //parameter 타입 정의 / return type 정의
  console.log(message);
  return 0;
}
```
아래 링크에서는 typescript로 작성된 코드를 transcompile된 javascript로 보여준다.
Reference : [TypeScript Playground](https://www.typescriptlang.org/play)


## parameters

**premitive parameters: *passed by value*** ⚠️
**object parameters: *passed by reference*** ⚠️

```js
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
```

## default parameters (added in ES6)⚠️

```js
//previously
function oldShowMessage(message, from) {
  if(from === undefined) {
    console.log(`${message} by ${from}`);
  }
  console.log(`${message} by ${from}`)
}

//  ↓↓↓↓↓↓↓↓↓ES6↓↓↓↓↓↓↓↓↓↓ ⚠️

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
```

ES6부터는 parameter의 값이 지정되지 않은 경우(undefined), default parameter을 지정해, 그 값으로 대체되도록 설정할 수 있다.

    
## rest parameters (addes in ES6)  ⚠️

```js
// 1. 일반적인 for문
function printAll(...args) {
  for (let i = 0; i<args.length; i++) {
    console.log(args[i]);
  }
}

// 2. for of문 ⚠️
  for (const arg of args) {
    console.log(arg);
  }
  
// 3. forEach문 ⚠️
  args.forEach((arg) => console.log(arg));

printAll('dream', 'coding', 'ellie');
```

`...`이 붙은 parameter를 rest parameter이라고 한다.

rest parameter로 지정된 parameter은 배열 형태로 전달되게 된다.

## local scope

지난 번에 block scope, global scope에 대해 알아봤다. 나중에 심화된 javascript 내용을 공부하다보면, Closure나 lexical environment에 대해 들을 것이다.

그 내용들은 이러한 원칙을 보다 상세하게 자세하게 설명해준다. 사실 하나의 개념/원칙에서 파생되었다.

그 하나의 원칙은 다음 한문장으로 이해하자. `밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.`

```js
let globalMessage = 'global'; //global variable
function printMessage() {
  let message 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello'; //local variable
    }
    console.log(childMessage); //return error
}
```

> 이러한 중첩된 함수에서 자식의 함수가 부모의 함수에 접근이 가능한 것들이 Closure이다.

## Early return, early exit ⚠️

`조건이 맞지 않을 때는, 빨리 return`해서 함수를 종료하고, `조건이 맞을 때만 필요한 로직을 실행`하는 것이 더 좋다는 개념.

가독성이 좋은 코드, 효율적인 면에서도 이편이 선호됨

```js
function upgradeUser(user) {
    if (user.poiunt > 10) {
      //long upgrade logic...
  } 
}
```

## Function Expression ⚠️ 

**a function declaration can be called earlier than it is defined(hoisted)** <br>
**a function expression is created when the execution reaches it**

`function expression은 함수를 선언한 다음부터 호출이 가능`한 반면, `function declaration의 경우, hoist`가 된다.

↳ javascript엔진이 선언된 것을 제일 위로 올려주기 때문.

```js
const print = function() {
  console.log('print');
}
print();
const printAgain = print;
printAgain();
```
위의 경우, 함수를 선언함과 동시에 바로 print 변수에 담는 경우이다. `anonymous function` (무기명 함수 )

함수를 print에 할당하게 되면, 변수명 print에 ()를 붙여 함수를 호출하듯이 사용 가능하다.

또한, 다른 변수에 할당할 경우, 결국 printAgain은 위에서 지정한 function을 가리키고 있기 때문에, 동일한 함수가 호출된다.

```js
const print = function print() {
  consolel.log('print');
}
```
위의 경우, `named function`

## call-back hell ⚠️

### call back? ⚠️

```js
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function() {
  console.log('yes!');
};

const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
```
위와 같이 printYes, printNo와 같은 `함수를 parameter로 전달해서, 필요한 상황에 따라 전달된 함수를 호출하는 것`을 `callback함수`라고 한다.

printYes에는 anonymous function을, printNo에는 named function을 사용하고 있다. ⚠️

> 이렇게 `expression에서 named function을 사용`하는 경우는, `디버깅을 할 때, stacktrace에 함수 이름이 나오게 하거나`, `함수 스스로 함수를 호출` 할 때, 사용한다.<br>
> 다만 이런 경우, `함수가 계속해서 호출`된다. 이렇게 `함수 내부에서 함수 스스로를 부르는 것을 recursion(재귀함수)`라고 한다.
> 
> 하지만 피보나치 수를 계산하거나, 반복되는 평균값을 계산하거나 하는 경우 등, 필요한 경우에만 사용하도록 하자.
> 
> 그리고, 계속해서 함수를 호출한 경우, 어느 순간에 `Uncaught RangeError Maximum call stack size exceeded`라는 에러가 뜬다.

## arrow function ⚠️

function expression을 쓰게 되면, 항상 function 이라는 키워드도 써야하고, 블록도 써야하는 번거로움이 있다.

arrow function은 이러한 부분들을 보다 간단하게 작성할 수 있도록 하여 가독성을 높여준다.

```js

const simplePrint = function() {
  console.log('simplePrint!');
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const simplePrint = () => console.log('simplePrint!');
```
```js
const add = function(a, b) {
  return a + b;
}

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const add = (a, b) => a + b;
```

## IIFE

**Immediately Invoked Function Expression**

```js
function hello() {
  console.log('IIFE');
}

hello();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

(function hello() {
  console.log('IIFE');
})();
```
함수를 선언한 후, 따로 호출하는 게 일반적이라면, 선언과 동시에 함수를 호출하는 표을 IIFE라고 한다.

위와 같이 전체 함수를 '()'로 감싸고, 함수를 실행하듯 parameter영역인 ()를 붙여준다.




















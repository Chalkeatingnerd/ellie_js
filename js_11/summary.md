# js_summary11 ⚠️⚠️

## async & await ⚠️

`promise chaning`의 경우, then(fn).then(fn).then(fn)와 같이 `처리가 많아짐에 따라 코드가 난잡`해질 수 있다.

`async`와 `await`은 `promise pattern`을 좀 **더 간결하고, 간편하고, 보다 동기적으로 실행되는 것처럼 보이게 만들어준다**.

> ### syntactic sugar ⚠️
> async와 await는 새로운 것이 추가된 것이 아니라, 기존에 존재하는 promise위에 조금 더 간편한 API를 제공하는데, 이렇게 기존에 존재하는 것 위에 또는 기존에 존재하던 것을 감싸서 우리가 보다 간편하게 사용할 수 있도록 제공하는 것을 syntactic sugar이라고 한다.
> 
> 전에 공부한 class또한 prototype를 베이스로 한 syntactic sugar이다.
>
> **definition of syntactic sugar**
> 
> In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.

### 1. asnyc

fetchUser가 `바로 Promise를 return` 한다. `async`라는 키워드를 함수앞에 쓰면, `코드 블록이 자동으로 Promise로 바뀐다`.⚠️

```js
async function fetchUser() {
  //do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

### 2. await



```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
  await delay(1000);
  return '🍏';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
```

위 코드의 getApple을 Promise 패턴으로 나타내면 다음과 같다.

```js
function getApple() {
  return delay(2000)
	.then(() => '🍌');
}
```

당연한 이야기지만, `await는 async 함수 내부에서만 사용가능`하다.

이처럼, await를 사용하면, 3초를 기다렸다가 이하 코드를 처리하라는 `직관적인 의미`로 보일 수 있고,` 동기적인 코드를 쓰는 것처럼 쉽게 이해할 수 있다.`

#### Promise callback-hell 

```js
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`)
  });
}
```
위와 같이 Promise 패턴을 사용하더라도, callback-hell을 경험할 수 있다. 때문에, 위의 코드도 async를 통해서 간단하게 나타내도록 하자.

```js
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
```

async와 await을 이용해서 훨씬 더 간편하고 간단하게 표시할 수 있다.

다만 위의 코드에는 문제점이 있다. apple의 값과 banana의 값을 `각각 Promise timeout 시간을 기다렸다가 호출`하게 된다.

사과를 호출하는 처리와 바나나를 호출하는 처리는 독립적으로 시행되므로, `병렬적으로 처리`해주면 된다.

## Promise패턴 동시 정의 & 호출

이런 경우, Promise의 특성을 이용해서, `Promise 객체를 먼저 만들` 게 한 다음, `동기적으로 표현`하면 된다. 아래를 참고하자.

```js
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`; 
}

pickFruits().then(console.log);
```

하지만 위와같이 일일이 promise를 생성하는 코드를 작성하는 것도 깔끔한 코드라고 볼 수 없다.

이러한 점 때문에, js에서는 아주 유용한 Promise API를 제공하고 있다.

### Promise API 이용

```js
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
	.then(fruits => fruits.join(' + '));
}

pickFruits().then(console.log);
```

Promise Constructor 중에 all은 대상 배열로 오는 모든 Promise들을 병렬적으로 받아오게 하고 모아준다. 
 
```js
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);
```

Promise Constructor 중에 race는 대상 배열로 오는 promise들 중 가장 먼저 리턴되는 친구를 반환한다.






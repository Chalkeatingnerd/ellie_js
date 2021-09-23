# js_summary10 ⚠️

## 1. Promise

`Promise`는 **JavaScript에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object**이다.

Promise는 정해진 장시간의 기능을 수행하고 나서, `정상적으로 기능이 수행`되어졌다면, `성공의 메시지와 함께 처리된 결과값`을 전해주고, 예상치 못한 `문제가 발생하면, 에러를 전달`해 준다.

* Promise is a JavaScript object for asynchronous operation.
	

* `State` 
	* `pending` (when on operation)
	* `fulfilled` (when the operation is successfully conducted) 
	* `rejected` (if something's wrong with network or cannot find file)
	
		**만약 Promise 내부에서 resolve 또는 reject 처리를 정의해주지 않으면, 계속해서 Promise의 Status가 pending으로 유지된다.**


* Producer vs Consumer 
	* Producer : 우리가 원하는 정보를 제공하는 사람
	* Consumer : 정보를 소비하는 사람
	
> `프로미스 내부`에서는 조금 `무거운 일들이 수행`된다. 왜냐면 네트워크에서 데이터를 받아오거나, file에서 큰 데이터를 읽어오는 과정은 시간이 꽤 걸리기 때문이다.
>
> 이것을 `synchronous로 처리`하게 되면, 파일을 읽어오고, 네트워크에서 데이터를 받아오는 동안, 다음 라인의 코드가 실행되지 않기 때문에, `시간이 걸리는 일들은 Promise를 만들어서 비동기로 처리`하는 것이 좋다.
> 
> 네트워크 통신이나 파일을 읽어오는 등의 처리는 비동기로 하는 것이 좋다.

```js
const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
});
```

* `새로운 promise를 만드는 순간`, 우리가 생성한 Promise의 `executor가 바로 실행`이 된다. ⚠️
	
	<br>때문에 위와 같은 경우, 사용자가 요청하지도 않았는데, 불필요한 네트워크 통신이 일어나게 된다.

```js
const promise = new Promise((resolve,reject) => {
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
})

promise.then((value) => {
  console.log(value);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('end of promise');
});
```

위의 경우, Promise는 어떠한 일을 2초정도 무언가를 하다가 일을 잘 마무리해서 resolve라는 callback 함수를 호출하면서, ellie라는 값을 리턴해준다.
 
`then`는 promise가 잘 수행돼 `정상적으로 resolve를 통해 값이 반환되는 경우에 그 값을 패러미터로 받는 callback 함수를 실행`시킨다.

reject는 보통 Error Object를 통해 값을 전달한다.  ~ [error_handling](#)

보통 Error Object에는 어떠한 에러가 발생했는지 이유를 명시해 줘야 한다. 

`finally` is called at the end of the promise as a default and callbackfn is processed

## 2. Promise Chaning

 

> `Chaining`
> 
> ```js
> promise.then( value => {
> //statement 
> }).catch( error => {
> //statement when error occured
> })
> ```
> then은 `Promise를 리턴`하게 되고, 해당 리턴된 Promise에 `catch를 호출`할 수 있게 된다. 이런 `연쇄 함수 호출을 chaning`이라고 한다.
> 
> Collection 함수들이나 array 함수들에서 자주 사용된다.

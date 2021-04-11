 # js summary01
 

 1. terminal > `node XXX.js`
 2. console API란?
 - console API는 브라우저가 제공하는 함수들(MDN 참고)
 - 콘솔은 언어 자체에 포함되어있지 않지만, 통상적으로 많이 쓰이기 때문에 nodejs, 웹 API에 공통적으로 포함되어있다.
 (동일한 콘솔창에서 nodejs를 통해서 실행시킬 수도 있고, 브라우저에서 딸려나오는 개발툴을 잘 활용하면 유용함)

---
#### 1. HEAD에 script 추가
 
``` js
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>

</body>
</html>
```
헤드안에 스크립트를 포함한 경우, 어떤 순서대로 사용자에게 페이지가 보여지게 될까?

사용자가 html파일을 다운받았을 때, 브라우저가 한줄 한줄씩 분석하게 됨.
한줄, 한줄씩 parsing(분석)하고 이해한 것을, CSS 결합해서 DOM요소로 병합하게 된다.

1. 브라우저는 HTML을 파싱하다가, script태그가 보이면, script태그를 다운받아야 한다고 인지한다.
2. 파싱을 잠시 멈추고, 필요한 js파일을 다운받고(fetching js), 실행(executing js) 한 후, 남은 HTML 코드를 파싱한다.

 - 이렇게 했을 때, 단점은 무엇일까? <br/>
 (js파일이 커지게되면, 나머지 HTML파일을 읽어들이는데 딜레이가 생기지 않을까?)
    - `js파일이 많이 커지게 되면 사용자가 웹사이트를 보는 데까지 시간이 많이 소요될 수 있음`
 ---
 #### 2. Body 끝에 script추가
 
 ``` js
 <!doctype html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     <script src="main.js"></script>
 </body>
 </html>
 ```
그 다음으로 많이 사용하는 방법은, 위와같이 script태그를 Body 안에 넣어서, HTML을 모두 파싱한 후 스크립트 파일을 다운받는 방식이다.

- 이 경우의 단점은 무엇일까?<br/>
(js파일이 HTML에 적용되지 않은 채 렌더링되는 일이 발생하지 않을까?)
    - 장점 : `사용자가 기본적인 HTML의 컨텐츠를 빨리 본다`
    - 단점 : js로인해 의미있는 서버의 데이터를 받아온다든지 DOM 요소를 이쁘게 꾸며준다든지 그런식으로 동작하는 웹사이트라면, `완성된 페이지를 보기 전까지, 스크립트 파일을 fetching하고 executing 하는 시간을 기다려야 한다.`
    
---
#### 3. HEAD안에 script를 작성하되, async라는 속성값을 사용

``` js
 <!doctype html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script async src="main.js"></script>
    <title>Document</title>
 </head>
 <body>
 </body>
 </html>
 ```

 1. 브라우저가 HTML을 다운받아서, 파싱을 하다가, script태그를 발견(async 발견)
 2. `병렬로 main.js파일을 다운` 받는다고 인식`(HTML 파싱과 다운로드 동시에 진행)`
 3. main.js가 다운로드가 완료가 되면, parsing을 멈추고, 다운로드된 js파일을 execute
 4. js파일 실행 후 나머지 HTML 파일 실행

 - `async는 boolean타입의 attribute`이기 때문에, `선언하는 것만으로도 true로 설정`돼, async 옵션을 사용할 수 있다.
 
 - 이 방식의 장단점은 무엇일까?<br/>
 (js파일 실행 전까지 HTML을 파싱하면서 js파일을 다운받기 때문에, 사이트 렌더링에 있어서 js파일 다운하는 시간만큼 렌더링을 더 빨리 할 수있지만, `여전히 실행하는 시간을 기다려야 한다`는 게 문제가 아닐까?)
    - 장점 : 병렬적인 다운과 파싱 작업 때문에, 다운받는 시간만큼 절약할 수 있다.
    - 단점 : `자바스크립트가, HTML이 파싱되기도 전에 실행될 수 있기 때문`에, 만약 js가 아직 파싱되지 않은 HTML의 DOM 요소를 querySelector 등을 이용해 조작하는 경우, `조작하려는 시점에, 아직 HTML 요소가 정리되어있지 않을 수 있다.`
     
 ---
 
 #### 4. HEAD안에 script를 작성하되, defer라는 속성값 이용
 
 ``` js
  <!doctype html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
     <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <script defer src="main.js"></script>
     <title>Document</title>
  </head>
  <body>
  </body>
  </html>
  ```
 
 1. 브라우저가 HTML 파싱하다 script태그 만남, defer 속성 확인
 2. main.js를 다운받되, HTML 파싱을 병렬적으로 진행시킴
 3. HTML파싱이 끝난 후에 js파일을 execute
 
 - 위 경우들을 봤을 때, defer을 사용해 script를 읽어들이는 것이 가장 현명하다고 할 수 있다.
 
 ---
 
 ## use strict

 자바스크립트를 이용할 때는, 제일 윗부분에, 'use strict'이라는 걸 정의해주자.
 
 ```js
// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// 'use strict' is added ECMAScript 5
'use strict';

console.log('AAA');
```

- typescript를 작성할 때는 전혀 선언할 필요가 없는데, 순수 vanillascript를 작성할 때는 꼭 작성하는 게 좋다.
(js는 매우 유연하게 만들어졌기 때문(`flexible === dangerous`))

- js에서는 선언되지 않은 변수에 값을 할당한다든지, 기존에 존재하는 prototype을 변경한다든지 등, 다른 언어의 관점에서 봤을 때 미친듯한 행동일 수가 있다.
 
```js
a = 6;
let a;
```
위와같이 말도안되는 코드도 js에서는 문제없이 실행될 가능성이 있음.


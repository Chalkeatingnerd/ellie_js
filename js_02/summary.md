## js summary02

> 서론 : 프로그래밍에서 가장 중요한 것은 무엇일까?
> 
> `입력`, `연산`, `출력`이 가장 중요한 엑기스!
> 
> 사용자에게 콘솔이나 UI에서 `입력받은 데이터를 잘 처리하고 연산`해서 알맞게 `사용자에게 출력`해주는 것이 제일 중요하다. 물론 그러한 데이터를 전송을 이용해서 서버로 보내서 다시 받아오는 것도 포함될 수 있다.
> 
> 이런 연산을 하면서 `CPU를 효율적으로 사용`할 수 있도록, `CPU에 최적화된 로직을 작성`하는 것도 중요하고, `메모리 사용을 최소화` 하는 것도 중요하다.


### 1. Use strict ⚠️
   
    use this for vanilla js

### 2. Variable

> #### 어플리케이션과 변수,  메모리 할당
> 
> 어플리케이션이 실행되게 되면, 어플리케이션마다 사용할 수 있는 메모리가 할당되어진다. 메모리는 텅빈 박스로 본다면, 어플리케이션마다 사용할 수 있는 박스가 제한적으로 할당되어진다.
> 
> let과같은 키워드를 통해 변수를 정의하게 되면, 한가지의 박스를 가리키는 포인터가 생기게 된다...
> 
> dorm_study repository 참고  

* `let` (added in ES6) : 자바스크립트에서 변수를 선언할 수 있는 유일한 키워드 (mutable : 변경 가능)

   * hoisting을 방지할 수 있음
   

* `var` : 예전에 js에서 사용했던 변수 정의 키워드. 변수를 선언하기도 전에 변수를 사용할 수가 있음. `사용하지 말자.`
   
   > `var hoisting` 
   >
   > `어디에 선언했는가에 상관없이, 항상 제일 위로 선언을 끌어올려주는 것`⚠️

   * var은 block scope를 무시한다. 
   
* `const` : 값을 선언함과 동시에 메모리상 주소값을 할당하고, 값을 다시 변경할 수 없음. (immutable : 변경 불가)

자바스크립트에서는 변수의 값이 계속 바뀌어야 할 좋은 이유가 없다면, 웬만해서는 const키워드를 이용해서 `constant로 작성하는 것이 바람직하고 좋은 습관`이다.


  > `favor immutable data type always` => 웬만하면 값을 할당하고 난 뒤에는 다시는 변경되지 않는 데이터타입을 사용하라는 뜻
  > * security - 해커들이 이상한 코드를 삽입해 변경해 나가는 것을 방지
  > 
  > * thread-safe - 어플리케이션이 실행되면 한가지 프로세스가 할당되는데, 그 프로세스 안에서는 다양한 쓰레드가 돌아가면서, 어플리케이션을 좀 더 효율적으로 빠르게 동작할 수 있도록 도와주는데, 다양한 쓰레드들이 이 변수에 접근해 값을 변경할 수 있고, 이러한 행위는 조금 위험할 수 있다. const 사용을 통해 방지
  > 
  > * reduce human mistakes

#### 2-1. Variable Type (dorm_study 참고)

primitive :  single item : number, string, boolean, null, undefined, symbol...<br>
`object :  box container`<br>
`function :  first-class function`

primitive - 더이상 작은 단위로 나눠질 수 없는 한가지의 아이템

`object`⚠️ - 싱글 아이템을 모아서 한 박스로 관리할 수 있도록 해 주는 것

function - `first-class function`⚠️ 지원이 된다는 말은 해당 언어에서는 function도 다른 데이터타입처럼 `변수에 할당`되고, 함수에 `parameter인자로도 전달`이 되고, return 으로 `function타입을 리턴`할 수 있다.

> ※ C와 같은 언어는 low-level언어라고 한다. 
> 
> 그 이유는, 개발자들이 프로그램을 짜면서, 개발자들이 보다 세세하게 메모리를 관리할 수 있기 때문이다.
> 
> 숫자에 관련한 데이터 타입만 보더라도, short, int, long, float 등등 다양하다.
> 
> 얼마나 큰 사이즈의 데이터를 담느냐에 따라서 사전에 어떠한 데이터타입을 사용할 지 고민해봐야 한다.
> 
> 다행히도 `자바스크립트`에서는 숫자와 관련된 데이터타입으로는 `number`만 생각하면 된다. 얼마나 큰 사이즈의 데이터를 할당할지를 고민할 필요도 없다.
> 
> `타입스크립트`의 경우, 다른 특별한 데이터타입들을 사용하는 것은 아니고, 단지 변수를 생성할 때에 `number을 지정`해주는 차이만 있을 뿐이다.
  
#### 2-2. special numeric values

```js
const infinity = 1 / 0; 
const negativeInfinity = -1 / 0; 
const nAn = 'not a number' / 2;
console.log(infinity);  // infinity
console.log(negativeInfinity);  // -infinity
console.log(nAn); // NaN (Not a Number)
```

DOM요소를 js를 이용해서 position을 바꾼다든지, 다양한 계산을 해야할 때, 나누고자 하는 값을 확인하지 않고 연산을 하면 이러한 출력이 발생하고 사용자에게 에러가 갈 수 있다. 때문에 꼭 연산이 valid한 값인지 확인하자.

#### 2-3. number의 범위
 
number은 `-2^53 ~ 2^53` 의 숫자를 표현할 수 있다.


#### 2-4. bigint ⚠️ 

최근에는 보다 큰 수를 표현하기 위한 `bigInt`라는 타입이 최근에 추가됐다.
 
아직까지 chrome, firefox 등 일부 브라우저에서만 지원하고 있다.

```js
const bigInt = 120987124081023981203915701923013n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // value : 120987124081023981203915701923013, type : bigint 
```

#### 2-5. string

다른 언어에서는 character 타입도 존재하는 경우가 많지만, js에서는 string 하나만 존재한다.

대부분은`' '`을 이용해 문자열을 나타낸다. 사용법은 여타 언어들과 거의 흡사
️
> ###template literals ⚠️ 
> 
> template literal 내부에 문자열을 작성할 때는 `${변수명}`과 같이 사용한다.

```js
const hello = 'hello';
const world = 'world';
console.log(`value : ${hello} + ${world} + type : ${typeof hello}`);
```

#### 2-6. boolean ⚠️

`false` : `0`, `null`, `undefined`, `NaN`, `''`

`true` : any other value

#### 2-7. null & undefined ⚠️

```js
let nothing = null;
console.log(`value : ${nothing} + type : ${typeof nothing}`);
// value : null, type: object

let x = undefined;
console.log(`value: ${x} + type: ${typeof x}`);
// value : undefined, type: undefined
```

* `null` - null을 할당 : 'empty한 값이다.' '아무것도 아니다'라고 지정해주는 것.<br>
  위에서 nothing은 `null로 값이 할당되어져 있는 경우`다.
  

* `undefined` - undefined 할당 : 선언은 되었지만, 아무것도 값이 지정되어있지 않다.<br>
  `텅 비었는지, 값이 들어가있는지가 정해지지 않은 상태`
  

#### 2-8. symbol ⚠️

Map이나 다른 자료구조에서 고유한 식별자가 필요하거나, concurrent하게 일어날 수 있는 코드에서 우선순위를 주고싶을 때 정말 고유한 식별자가 필요할 때 사용되는 type

간혹 식별자를 string을 이용해서 쓰는 경우가 있는데, string을 사용한 경우, 다른 모듈이나 다른 파일에서 동일한 string을 썼을 때, 동일한 식별자로 간주된다.

```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`)
```

하지만 동일한 string을 이용하더라도, Symbol을 이용해 할당하면, 두가지 Symbol은 다른 식별자로 만들어진다.

#### 2-9. object 💬

### 3. Block scope ⚠️

코드를 block 내부에 작성하게 되면, 외부에서는 block내부에 대해 접근 불가능.
block 내부에서는 외부에 접근 가능
let globalName = 'global name';

> `글로벌 변수`
>
> 블록 내부가 아닌, 파일에 바로 작성하는(블록 밖)들을 global scope라고 부른다. 이 global한 것들은 어느곳에서나 접근이 가능하다.

global한 변수들은 `어플리케이션이 시작되고 끝나는 시점까지 메모리에 계속 탑재`돼 있기 때문에, `최소한으로 사용`하는 것이 좋다.

가능하면, class나 함수, if나 for로 필요한 부분에서만 정의해서 쓰는 것이 좋다.

### 4. Dynamic typing : dynamically typed language

C나, Java는 `statically typed language`이다. 변수를 선언할 때, 어떤 타입인지 붙여주여야 했다.

하지만 js는 작성할 때 `변수가 어떠한 타입인지 선언하지 않고`, `runtime때 할당된 값에 따라서 변경될 수 있다`⚠️.

이러한 특성 때문에 프로젝트상 문제가 생기는 경우가 종종 발생한다. 💬

> TypeScript ⚠️
> 
> 위와같은 문제 때문에 TypeScript가 생겨났다.
> 
> TypeScript는 MS에서 만든 오픈소스 프로그래밍 언어로, 강력한 `static typing`과, es2015를 기반으로 하는 객체지향적 문법이다.
> 
> 대규모 어플리케이션을 개발하는 데 자바스크립트가 어렵고 불편하다는 점이 있었고, (dynamic typing) 그에 대응해 개발되었다.
> 
> js를 체득한 후에 TypeScript로 넘어가자.
> 
> reference : [babel사용 이유](https://ui.toast.com/weekly-pick/ko_20181220), 
> [TypeScript](https://velog.io/@taeg92/TypeScript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0), 
> [TypeScript_Trend](https://bravenamme.github.io/2020/02/12/what-is-babel/)

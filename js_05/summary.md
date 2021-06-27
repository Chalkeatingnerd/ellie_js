# js_summary05

## javascript에 class나 object가 없다면?

우리가 정의한 변수들이 여기저기 흩어져 있어 규모있는 프로젝트를 만들기 힘들었을 것이다.

`클래스` : 조금 더 연관있는 데이터들을 한 데 묶어두는 컨테이너같은 것. 클래스 내부에는 `필드`와 `메서드`를 정의할 수 있다.

`데이터 클래스` : `내부에 필드만 정의된 클래스`

`캡슐화(encapsulation)` : 클래스 안에서 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수를 나눠놓는 것

그리고 클래스를 이용해 상속과 다향성이 일어날 수 있는데, 이러한 모든 것들이 가능한것이 객체지향 언어이다.

우리가 살아가는 세상에는 수많은 객체와 사물들이 존재하는데, 개발자들은 이러한 사물과 객체들을 클래스나 오브젝트로 정의해 유연하게 프로그래밍 할 수 있게 된다.

객체 지향언어로 프로그래밍을 잘 하는 개발자는 풀어야하는 문제나 구현해야 하는 기능을 객체로 잘 정의해 개발할 수 있는 개발자를 말한다. 

---

## class & object

class : 틀, template - 실제 데이터는 들어있지 않고 모양(틀)만 가지고 있는 형태 메모리에 올라가지 않음

object : class를 바탕으로 찍어낸 instance, 데이터가 들어있으며, 메모리상에 올라감.

### js에서의 class & object 사용 💬 ⚠️

* **Javascript classes** 
	
	introduced in ES6
	
	`syntactical sugar` over `prototype-based` inheritance

> 그럼 class가 도입되기 전의 javascript에서는 어떻게 객체지향 프로그래밍을 했을까?
> 
> 클래스가 도입되기 전에는 클래스를 정의하지 않고 바로 function을 이용해 object를 만들 수 있었다. 

> syntactical sugar : 문법적 기능은 그대로인데, 그것을 읽는 사람이 직관적으로 쉽게 코드를 읽을 수 있게 만든다는 것. 기존에 존재하던 prototype을 base로 한것에 기반해서 그 위에 문법만 class로 추가된 것

```js
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }
  
}

const user1 = new User('Steve', 'Jobs', 20);
console.log(user1.age);
```
위와 같이 클래스와 생성자를 만들고, `getter`과 `setter`를 만들어 주었다.

근데 위와 같은 방식으로 실행할 경우, `age에 대해 Uncaught RangeError: Maximum call stack size exceeded가 발생`한다.

만약 우리가 age라는 getter를 정의하는 순간, `constructor의 this.age`는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라, `getter를 호출`하게 된다.

그리고 우리가 setter를 정의하는 순간, `constructor의 this.age의 '='는 값을 할당할 때` 바로 메모리에 값을 할당하는 것이 아니라, `setter를 호출`하게 된다. 그말은, setter안에서 전달된 value를 this.age에 할당할 때, `this.age는 set age를 가리키므로` `메모리에 value를 업데이트 하는 게 아니라, setter를 호출`하게 된다.

그렇게 계속해서 setter가 돌아가면서 setter 를 호출하고, 결국 call stack이 초과되고 에러가 터지게 된다.

이때문에, getter, setter내에서 사용하는 `변수의 이름을 조금 다른 걸로 만들어줘야 한다`(private property convention).

보통 언더바를 이용해 _age로 정의해준다. ⚠️
️
```js
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
  
}

const user1 = new User('Steve', 'Jobs', 20);
console.log(user1.age);
```

위 코드와 비교하면 getter, setter의 this.age냐, this._age냐의 차이밖에 없다.

> 정확한 차이를 말하자면, 첫 번째 코드에서는 age라는 변수에 실질적인 값이 저장되는 반면, 두 번째 코드에서는 _age라는 변수를 따로 만들어서 값을 저장하는 방식이다.
> 
> 하지만 user1.age, user1._age를 호출하더라도 같은 값이 return되는데, 그 이유는 user1._age는 _age가 가리키는 값을 호출하는 것이고, user1.age는, get age (getter)를 호출하기 때문에 마찬가지로 _age를 호출하기 때문이다.

## public & private filed ⚠️️ 

비교적 최근에 추가되었기 때문에, 많은 개발자가 사용하고 있는 개념은 아니다.

많은 브라우저에서 지원을 하고 있지 않을 가능성이 높기 때문에, 꼭 사용한다면 babel을 이용해야 한다.

```js
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```
 
## static ⚠️

class내부의 field 와 method들은 새로운 object를 만들 때마다 그대로 복제되어서 값만 우리가 지정된 값으로 변경이 되어서 만들어진다.

하지만 간혹 이러한 object에 상관없이 데이터에 상관없이 class가 가지고 있는 고유한 값과 데이터와 상관없이 `동일하게 반복적으로 사용되어지 메서드나 필드에 static을 붙이면, class자체에 값이 연결된다`.

호출할 때는 인스턴스가 아닌, `오리지널 클래스.필드` 혹은 `클래스.메서드` 와 같은 방법으로 호출한다.

```js
class Article {
  static publisher = 'Dream coding';
  constructor(articleNumber) {
    this.articleNumber =  articleNumber;
	}
	
	static printPublisher() {
    console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
```

어떤 경우에 static을 사용하면 좋을까? → `들어오는 data나 object 상관없이 공통적으로 class에서 쓸 수 있다면`, static과 static 메서드를 사용하는 것이 `메모리의 사용을 줄여줄 수 있다.`

하지만 무분별하게 static을 사용하지는 말자.

## 상속과 다형성 ⚠️

`Inheritance & Polymorphism`

다양한 모양의 도형을 그려주는 어플리케이션을 만든다고 가정하자.

네모, 세모, 원 등 다양한 모양을 만들어줘야 하는데, 이러한 도형들은 공통적으로 가로길이, 세로길이, 너비 등의 공통적인 field를 가진다.

그렇다면 이러한 공통점들을 묶어서 'Shape'(도형)이라는 클래스로 정의해서 나중에 object를 찍어낼 때 별개 부분들을 지정해주면 되지 않을까?

`java와는 달리 Override Annotation이 불필요`하고(없음), super.xxx는 동일하게 사용 가능.

### instanceOf

java와 동일한 사용방법, true/false를 return하고, 인스턴스가 어떠한 클래스를 바탕으로 만들어진 인스턴스인지를 확인 하는 키워

`javascript에서 만든 모든 class들은 object를 상속`하고 있다. java와 유사. 하지만 object가 모든 객체의 트리 최상위에 있는 것은 아니다.

근본 클래스가 A라는 부모를 상속하고 있다면, instanceOf '부모클래스'도 true를 반환한다.






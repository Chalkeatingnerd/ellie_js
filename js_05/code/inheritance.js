// 5. Inheritance

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }
}

// if use code-generator, it automatically generates getters and setters in the form of javascript-getter/setter

// inheritance : extends Shape to make various kinds of shapes

class Rectangle extends Shape {}
// if this works the same as it works in java, super() of Shape automatically added and works when compiled

const rectangle = new Rectangle(20,20,'blue');

class Triangle extends Shape {
  //does not need @Overriding annotation in javascript, just override it
  draw() {
    super.draw();
    console.log('this is from child : triangle');
  }

  getArea() {
    return (this.width * this.height)/2;
  }

  //override Object class method 'toString()'
  toString() {
    return `Triangle: color: ${this.color}, Area: ${this.getArea()}`
  }

}

const triangle = new Triangle(10,10,'red');

rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); //parameter of 'join()' is a seperator(string type) of the result String
  console.log(result);
  console.log(`----------------`);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
  console.log(`----------------`);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
  console.log(`----------------`);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2, array.length - 1);
  console.log(result); // splice() returns the deleted value chain
  console.log(array); // spliced value chain will be removed from the splice() target
  console.log(`----------------`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(student => student.score === 90);
  console.log(result);
  console.log(`----------------`);

}//callbackfn의 선언부가 한줄인 경우, return과 ;가 생략가능!

// Q6. make an array of enrolled students
{
  // const result = students.forEach( student => {
  //   if (student.enrolled === true) {
  //     console.log(student);
  //   }
  // });
  const result = students.filter(student => {
    return student.enrolled;
  })
  console.log(result);
  console.log(`----------------`);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // const result = [];
  // students.forEach(student => {
  //   result.push(student.score);
  // });
  // console.log(result);

  const result = students.map(student => {
    return student.score;
  });
  console.log(result);
  console.log(`----------------`);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.filter(student => {
    return student.score < 50;
  });
  console.log(result);
  console.log(`----------------`);
}

// Q9. compute students' average score
{
  let sum = 0;
  students.forEach(student => {
    sum += student.score;
  })
  console.log(sum);
  console.log(`----------------`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let sum = 0;
  students.forEach(student => {
    sum += student.score;
  });
  const agv_score = sum/students.length;
  console.log(agv_score);
  console.log(`----------------`);

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).join(', ');
  console.log(result);
}
'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; // 오브젝트는 키와 밸류의 집합체
// object 만드는 방법 두 가지
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const han = { name: 'han', age: 4 };
print(han);

// with JavaScript magic (dynamically typed language)
// can add properties later
han.hasJob = true; // 속성 추가 // 가급적 피하자.
console.log(han.hasJob);

// can delete properties later
delete han.hasJob; // 속성 삭제 // 가급적 피하자.
console.log(han.hasJob);

// 2. Computed properties(계산된 속성)
// key should be always string
console.log(han.name);
console.log(han['name']); // 배열에서 받아옴['key'] // ex. printValue() 같은경우 사용
han['hasJob'] = true; // 속성 추가
console.log(han.hasJob);

function printValue(obj, key) { // 계산된 속성 사용(동적)
  console.log(obj[key]);
}
printValue(han, 'name');
printValue(han, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function(생성자 함수?)
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// in 연산자 : 해당 키가 오브젝트 안에 있는지
console.log('name' in han);
console.log('age' in han);
console.log('random' in han);
console.log(han.random);
// 6. for..in vs for..of
// for (key in obj) // 해당 객체의 키를 반환
console.clear();
for (let key in han) {
  console.log(key);
}

// for (value of iterable) // 배열,리스트, iterable 애들 사용
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'han', age: '20' };
const user2 = user; // 얕은 복사
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// good way (.assignt(,))
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // fr2가 fr1을 덮어 씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big
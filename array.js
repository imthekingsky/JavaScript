'use strict';

// Array🎉

// 1. Declaration(배열 선언)
// 배열 선언 방법 2가지
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 제일 마지막
console.clear();

// 3. Looping over an array(배열 루프)
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach // 콜백함수를 받아온다
// 콜백함수: 다른 함수에게 인자로 전달되어 나중에 실행되는 함수
fruits.forEach(function(fruit, index, array){
  console.log(fruit, index, array);
})
// array 함수로 간결하게 가능(forEach는 주로 array를 출력하지않음)
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy(추가, 삭제, 복사)
// push: add an item to the end //추가(뒤로)
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end //삭제(뒤에서)
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging //추가(앞에서)
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging //삭제(앞에서)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push //주의!

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
// fruits.splice(1); // 뒤 지정하지 않으면 [1] 뒤로 다 삭제
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); // [1] 0개 지우고 사과,수박 넣어줘
console.log(fruits);

// combine two arrays // 배열 연결(붙이기)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching // 검색(찾기)
// indexOf: find the index // 인덱스 번호 찾기
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes // 포함하는지 안하는지(true, false)반환
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf // 뒤에서 인덱스 번호 찾기
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));
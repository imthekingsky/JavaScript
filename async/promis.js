'use strict';

// Promise is a JavaScript object for asynchronous operation.
// Promise : 자바스크립트 안에 내장되어있는 오브젝트
// (비동기적인것을 수행할 때 콜백함수 대신에 유용하게 사용 가능)
// State: pending(수행중) -> fulfilled(성공) or rejected()
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 새로운 프로미스가 만들어 질때는 우리가 전달한 ex함수가 즉시 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('han');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then(value => { // Promise 객체가 이행(fulfilled) 상태가 될 때 호출되는 콜백 함수를 정의
    console.log(value); // 이때 콜백 함수의 매개변수는 Promise가 성공적으로 완료될 때 전달된 데이터입니다.
  })
  .catch(error => { // Promise 객체가 거부(rejected) 상태가 될 때 호출되는 콜백 함수를 정의
    console.log(error); // 이때 콜백 함수의 매개변수는 Promise가 거부된 때 전달된 에러입니다
  })
  .finally(() => { // Promise가 이행이든 거부든 상관없이 항상 실행되는 콜백 함수를 정의
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
  
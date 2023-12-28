'use strict';

// JavaScript is synchronous.(동기적: 호이스팅이 된 이후부터 코드가 작성한 순서대로 동기적으로 실행)
// 호이스팅 : JavaScript에서 변수 및 함수 선언이 스코프의 상단으로 옮겨지는 현상 실행단계에서 발생?
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//[1] Synchronous callback(동기 콜백)
function printImmediately(print) { // 함수 선언
  print();
}
printImmediately(() => console.log('hello')); // 함수 실행(바로 콜백함수 실행)

//[2] Asynchronous callback(비동기 콜백: 언제 코드가 실행될지 모름)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout); // (브라우저 api) 설정한 시간 뒤에 실행
}
printWithDelay(() => console.log('async callback'), 2000); // 함수 실행(2초뒤 콜백함수 실행)

// Callback Hell example(콜백 지옥 예제)
class UserStorage { // 사용자의 데이터를 서버에서 받아오는 클래스
  loginUser(id, password, onSuccess, onError) { // 로그인 함수
    setTimeout(() => {
      if (
        (id === 'han' && password === 'sky') ||
        (id === 'coder' && password === 'world')
      ) {
        onSuccess(id); // 성공시 함수
      } else {
        onError(new Error('not found')); // 실패시 함수
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) { // 사용자 정보를 받아오는 함수
    setTimeout(() => {
      if (user === 'han') {
        onSuccess({ name: 'han', role: 'admin' }); // 성공시 함수
      } else {
        onError(new Error('no access')); // 실패시 함수
      }
    }, 1000);
  }
}

// 콜백지옥... 읽기 너무 힘듬(가독성X)
const userStorage = new UserStorage(); // 1. 클래스 생성
const id = prompt('enter your id');    // 2. id받아오기
const password = prompt('enter your passrod'); // 3. pwd받아오기
userStorage.loginUser( // 로그인 함수 실행 loginUser(id,pwd,성공함수,실패함수)
  id,       // id
  password, // pwd
  user => { // 성공함수 // user = id
    userStorage.getRoles( // 성공함수 안에서 정보함수 실행 
      user, // user = id 
      userWithRole => { // 정보함수 안에서 성공함수 실행 
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => { // 실패함수
    console.log(error);
  }
);
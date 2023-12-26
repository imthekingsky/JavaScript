// JavaScript is very flexible
// flexible === dangerous
'use strict'; // 엄격 모드에서 동작하는 코드

// 2. Variable(변수), rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'han';
    console.log(name);
    name = 'han2';
    console.log(name);
}
console.log(name);
console.log(globalName);
// 호이스팅(hoisting): 어디에 선언했든 상관없이 제일 위로 끌어 올려주는것

// 3. Constant 상수, r(read) 가능한 const 사용하자
const imm = 7;

// Note!
// Immutable data types : premitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons;

// 4. Variable types 데이터 타입
// primitive(string, number, bollean, null, undefined, symbol) ! Java, C 와달리 number로 통일
// object
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, Nan(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt
const bigInt = 1234n; // 값 뒤에 n 붙이면 bigInt 로 간주 // over(-2**53~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // 템플릿 리터럴(temlate literals) (string) 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, Nan, ''
// true : any other value

// null
let nothing = null; // 직접 null 지정
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언 되었지만 값 지정 X
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 나중에(자료구조에서 고유한 식별자 필요하거나 동시다발적으로 일어날때 우선 순위를 주고 싶을때 사용)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 동일한 Symbol을 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// Symbol 을 출력시 .description 이용
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structur
// object를 가리키는 reference가 메모리에 저장된다.
const han = {name: 'haneul', age: 24};

// 5. Dynamic typing : dynamically typed launguage
// 결론 : 타입스크립트
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // 에러 발생





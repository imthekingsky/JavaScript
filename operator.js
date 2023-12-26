// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`); // 문자열 템플릿

// 2. Numberic operators
console.log(1+1); // add
console.log(1-1); // add
console.log(1/1); // add
console.log(1*1); // add
console.log(5%2); // add
console.log(2**3); // add

// 3. Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators (x += y;)
// 5. Comparison operators (비교 연산자)

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4<2;

// || (or), finds the first truthy value
// !중요! : 함수를 호출하는경우 젤 뒤에
console.log(`or: ${value1 || value2 || check()}`);
console.log(`or: ${value1 && value2 && check()}`);
function check() {
    for(let i = 0; i< 10; i++){
        // wasting time
        console.log('hi');
    }
    return true;
}
// !(not) not 연산자
console.log(!value1);

// 7. Equality
// === 사용하도록 하자
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(전환)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion(전환)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const han1 = { name : 'haneul'};
const han2 = { name : 'haneul'};
const han3 = han1;
console.log(han1 == han2); // 다른 reference(false)
console.log(han1 === han2);// 다른 reference(false)
console.log(han1 === han3);// 같은 reference(true)

// equality - puzzler
console.log(0 == false); // 0은 false로 간주(true)
console.log(0 === false);// 0은 false지만 boolean 타입이 아님(false)
console.log('' == false);// ''은 false로 간주(true)
console.log('' === false);// ''은 false지만 boolean 타입이 아님(false)
console.log(null == undefined);// 특이하게도 둘다 같음(true)
console.log(null === undefined);// 같지만 다른 타입(false)

// 8. Conditional operators : if (조건문)
// if, else if, else

// 9. Ternary operator: ? 삼항 연산자
// condition ? value1 : value2; 
const name = 'han';
console.log(name === 'han' ? 'yes' : 'no');

// 10. Switch statement (스위치문)
const browser = 'Chrome';
switch(browser){
    case 'IE':
        console.log('go');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('nice');
        break;
    default:
        console.log('default');
        break;
}

// 11. Loops (반복문)
// while
let i = 3;
while(i>0){
    console.log(`i : ${i}`);
    i--;
}
// 또는 do while
// 또는 for문
for(let i=3; i>0; i=i-2){
    
}

// break, continue
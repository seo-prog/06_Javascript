
// 전역 객체, 전역 함수

// 코드가 실행되기 이전에 자바그크립트 엔진이 어떤 객체보다도 먼저 생성해놓는 특수한 객체
// 어떤 객체에도 속하지 않은 객체

// 전역 프로퍼티

// Infinity - 무한대를 나타내는 숫자 값
console.log(global.Infinity === Infinity); // 전역 프로퍼티에서 꺼낼 수 있는데 global 은 생략 가능하다.

// 양의 무한대
console.log(10/0);
// 음의 무한대
console.log(-10/0);
console.log(typeof Infinity);

// NaN:  숫자가 아님을 나태내는 숫자
console.log(global.NaN);
console.log(Number('abc'));
console.log(typeof NaN);

// undefined -> 초기값이 없고 선언만 되었을 떄 undefined !
console.log(global.undefined);
console.log(typeof undefined);






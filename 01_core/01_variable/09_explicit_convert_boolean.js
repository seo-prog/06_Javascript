// 불리언 타입으로 변환
console.log("=== 논리 타입으로 변환 ===");


// 1. Boolean 생성자 함수를 new 연산자 ㅇ벗이 호출하는 방법

console.log(Boolean("javascript"));
console.log(Boolean('1'));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(null));

console.log(Boolean({}));
console.log(Boolean([])); // 빈 객체, 빈 배열은 truthy 다.

console.log("===========");


// 2. ! 부정 연산자를 두 번 사용하는 방법
console.log(!!'javascript');
console.log(!!'');
console.log(!!1);
console.log(!!0);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!{});
console.log(!![]);


// 비교연산자
console.log(10>'5');

// +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');// 빈 문자열이 단항연산자를 만나면 정수로 바뀌어준다. 그렇기에 결과값은 0이 나온다는 것이다.
console.log(+'1');
console.log(+'javascript');
console.log(+true);
console.log(+false);
console.log(+null); // null 은 의도적인 빈값이기 떄문에 0으로 반환이 되고
console.log(+undefined); // undefined 는 아예 반환이 안된다.
console.log(+[]); // [] 빈배열은 0으로 바뀌어 반환.





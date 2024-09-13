// 빌트인 전역 함수

// isFinite
// 전달 받은 인수가 정상적인 유한수인지 검사하는 함수
// 유한수이면 true, 무한수이면 false (NaN도 false)

console.log(isFinite(10));
console.log(isFinite('10'));
console.log(isFinite(null)); // 숫자가 아니면 정수형으로 타입변환을 먼저 한 다음 판단 !

console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite("abd"));
console.log('--------------------------------');


// isNaN
// 전달 받은 인수가 NaN 인지 검사하여 결과를 불리언으로 반환
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사 진행

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("abc"));
console.log(isNaN(true));
console.log(isNaN("")); // 빈문자열 정수타입으로 바뀌면 0이된다.
console.log(isNaN(undefined));

console.log("----------------");

// parseFloat -> 문자열을 숫자로 바꿔주는 기능
console.log(parseFloat("10.01")); // falseint 는 소수점 절삭되니까 parfeFloat 쓴다

// 공백으로 구분 된 문자열은 첫 번째만 반환
console.log(parseFloat("10 20 30"));

// 숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat("10cm"));

// 앞 뒤 공백은 무시한다
console.log(parseFloat("      1004      "));


// encodeURI
// URI 를 문자열로 전달 받아 어떤 시스템에서도 읽을 수 있게 변환
const uri = "http://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc); // 어디서든 읽을 수 있게 아스키ㅣ셋 식으로 변환시켜준다

// decodeURI 
// 인코딩 된 URI 를 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);







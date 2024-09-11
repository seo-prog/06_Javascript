// ES6 에서 도입된 화살표 함수는 function 키워드 대신
// 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다..
// 화살표 함수는 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 ㄸㅐ
// 유용


let message;

// 기존 function 
message = function(){
    return "hello world"
}
console.log(message());

// finction 키워드 생략 가능
message = () => {
    return "Array Function"
}
console.log(message());

// 명령문이 하나만 있을 경우 중괄호를 생략 가능
message = () => "Array Function are simple!";
// 이 떄 함수 몸체 내부의 문이 값으로 평가될 수 있으면, 암묵적으로 반환
console.log(message());


// 매개변수가 있는 경우
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message("function", "!"));


// 매개변수가 하나면 소괄호 생략 가능

message = val => "Arrow" + val;
console.log(message("Function !! ")); 

// 구조 분해 할당
let obj={
    a : "test",
    b : "value"
}

const test = ({a,b}) => 'hi ${a} + ${b}'; // 중괄호 안에서 같은 값이 있는지 키값을 추적한다. 중괄호가 들어가 있으면 return 이 꼭 들어가야 한다. 중괄호가 없으면 return 생략 가능
console.log(test(obj)); // odj 객체의 키값을 추적했다.

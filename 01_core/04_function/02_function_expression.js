// 함수 표현식

// 함수는 1급 객체라 변수 안에 할당할 수 있다.
// 1급 객체는 return 값이 존재하는 객체이다. -> 모든 함수임 undefined ㅡ를 return 

//함수명을 생략할 수 있다.
let hello = function(name){
    return `${name}님 안녕하세요~!`
}  // 키 값을 지정하면 부를때 객체.키값 무조건 일케 불러줘야 한다.

// 함수만 넣으면 그냥 객체이름을 불러도 된다.
// 원래 키값 : 일케 써줘서 혹시 부르고 싶으면 객체명.키값 일케 불렀는데 이거는 하나라서 키값을 따로 안써준건가?

console.log(hello.test("홍길동"));

let calc = function add(a,b){
    return a+b;
}

console.log(calc(10,20));
// console.log(add(10,20));// 이렇게 별칭으로 부르지는 못한다. 이거 오류남..


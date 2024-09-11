
// 함수 호이스팅

console.log(hello);
// console.log(hi);


console.log(hello("홍길동"));
// console.log(hi("홍길동")); // 변수는 선언이 되어있는데 몸체는 아직 선언이 안되었기에 이 코드문장은 오류가 난다.

function hello(name){
    return `${name}님 안녕하세요 ~!`
} // 자바스크립트는 밑에 선언해도 미리 실행을 시켜주기 때문에 밑에 선언해도 위에서 쓸 수 있다.


let hi = function(name){
   return `${name}님 안녕하세요 ~!`
} // 원래는 var 를 사용했는데 그떄는 호이스팅이 가능했는데 새로생긴 let 은 오류가 많이 나는 호이스팅을 막아둠. 글서 에러남

// 함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다.
// 따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
// 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는 자바 스크립트 고유의 특징을 함수 호이스팅 이라고 한다. 

test();

function test(){
    console.log(" 이거랑 ");
}


function test(){
    console.log(" 이거 중 어떤게 실행되나 ?");
}// 이름이 같은 함수가 있으면 뒤에 선언한애로 덮어쓴다. 

var test = () => {
    console.log('123'); // let 이면 안덮어쓰여지고 var 면 덮어쓰여진다.
    // let 은 중복을 다 막아뒀다.
}



// ====================================

console.log("-----------------------------------");

// var 를 사용할 때 함수 표현식의 문제점
// 문제점1. 호이스팅, 문제점2.이ㅡ름의 중복을 허용하는 점

console.log(funTest); // 선언은 된건데 몸체가 없어서 에러가 나는거임.
var funTest = () => {
    console.log("1");
}
funTest();
var funTest = () => {
    console.log("2");
}
funTest();

let funTest = () =>{
    console.log("2");
}
funTest(); // 이건 콘솔창에서 에러남
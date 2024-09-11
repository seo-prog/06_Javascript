// return 반환문

function hello(name){
    return `${name}님 안녕하세요 `
    // 반환문 이후의 문은 실행되지 않고 무시된다..
    console.log(qwer);
}

// 반환문은 리턴 키워드 뒤에 오는 값을 반환한다.
console.log(hello("홍길동"));

// 반환 값을 명시적으로 지정하지 않으면 undefined 가 반환된다.
function fun(){
    console.log(" 함수가 호출되었씁니다.");
    return;
}

console.log(fun()); // return 값이 없으니 undefined 반환~!




// 함수를 매개변수로 전달하는 것도 가능하다.

const test = () => {
    console.log("test");
}

function result(a){
    a(); // 매개변수로 받는 a 함수를 실행시킬꺼라는 코드.
}

result(test);
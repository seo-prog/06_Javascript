// 매개변수와 전달인자

function hello(name){

    //  매개변수는 함수 몸체 내부에서만 참조할 수 있다..
    console.log(name);

    // 모든 인자는 암묵적으로 arguments 객체의 프로퍼티로 보관한다.
    console.log(arguments);
    // 인덱스번호 : 'name' 형식으로 argument 가 나온다.

    return `${name}님 안녕하세요 ~!`;
}

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(name); 에러남

let result = hello("홍길동");
console.log(result);


// 함수는 매개변수의 갯수와 인자의 갯수가 일치하는지 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다.
result = hello();
console.log(result); // 이름을 받지 못했으니 undefined님 으로 나온다. 자바스크립트는 매개변수를 다 채워주지 않아도 에러가 나지 않고 undefined 로 출렫된다.


// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시한다.
// 모든 인수는 암묵적으로 arguments 에 보관된다. arguments를 찍어보면 오바된 매개변수도 출력이 된다.[Arguments] { '0': '홍길동', '1': '유관순' }일케 !
result = hello("홍길동", "유관순");
console.log(result);



// 인수를 전달하지 않았을 경우, undefined 를 전달하였을 경우
// ES6에서 도입된 매개변수 기본값을 사용할 수 있따.

function hi(name = "아무개"){
    if(arguments.length !== 1 || typeof name !== 'String' || name.length === 0 ){
        throw new TypeError(" 인수는 1개여야 하고 문자열이며 빈 문자열을 허용하지 않습니다. "); // 이상한거 입력하면 에러뜨도록 조치
    }
    return `${name}안녕~!~!`
}

result = hi("나다");
console.log(result);


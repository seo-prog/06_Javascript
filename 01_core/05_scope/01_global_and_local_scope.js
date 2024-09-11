
// 전역 스코프와 지역 스코프

/*
전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역변수는 어디서든지 참조할 수 있다.
지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다.
지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 하위에서 유효하다.
*/ 

// 전역 필드
let x = "global x";
let y = "global y";

function outer(){ // 함수일떄는 전여변수를 읽음
    let z = "outer's local z"
    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        let x = "inner's local x"

    console.log(x);
    console.log(y);
    console.log(z);
}
inner();
}
outer();


// 자바, c 등 대부분의 프로그래밍 언어는 함수 몸체 뿐만 아니라 모든 코드 블록{if, for, while, try 등} 이 지역 스크프를 만드는 블록 레벨 스코프를 가진다
// 하지만 var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프를 가진다..
// ES6 에 도입된 let키워드는 블록 레벨 스코프를 지원한다.

var i = 0;
for(var i = 0; i<10; i++){} // var는 for블록을 인정을 안해서 뒤에 실행된 for의 i 로 출력.
// var 는 위에 i 랑 이 안에 i 랑 똑같은 i 로 인식하여 가장 마지막에 실행된 i 값인 10 이 출력이 된다.
// for(var i = 0; i<10; i++){} let 은 인정을 하기에 콘솔창에 i 값이 0이 된다.
console.log(i);

// 변수의 은닉화 
// 안에꺼를 쓰는겨


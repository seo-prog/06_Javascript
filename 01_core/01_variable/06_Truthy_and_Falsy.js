

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy, Falsy 로 구분한다.
// 암묵적 타입 변환이 일어난다..

let test1;
console.log(test1);
console.log(!test1); // !붙인다는건 불리언 타입으로 자동 형변환~!
console.log(!!test1);
console.log("==== 객체리터럴 ====");


// 객체 리터럴
let test = {
    a : null, // 얘네들은 그냥 변수값들이다.
    b : 0,
    fun(){ // 이름이 fun 인 메소드
        console.log("testtest");
    }
};


if(test?.b){ 
    // test 가 null 이면 undefined 처리를 하게된다. 그러므로 flasy 가 되어 false 가 된다.
    //test가 null 일경우에 오류가 발생하는데 test 뒤에 ?를 붙여준다고 하면 test 가 null 인지 아닌지 부터 검증한다.
    //test 안에 b 의값 이라는 의미이다.
    //0은 falsy 이므로 false 가 출력되게 된다.ㅣ
    console.log("true");
}else{
    console.log("false");
}

test?.b ? console.log(true) : console.log(false); 
// 우리 배웠던 삼항연산자
// 여기서도 마찬가지로 ?를 붙여주면 에러가 안난다.

// console.log();안에 들어가려면 return 값이 있어야 정상실행. return 값이 없으면 undefined 가 같이 나오게 된다.







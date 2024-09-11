// ESS 까지는 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이였다. 이는 몇가지 문제를 야기한다..

// 1. 변수 중복 선언 허용
var msg = "안녕하세요";
console.log(msg);

var msg = "안녕히가세요";
console.log(msg);
// 초기화 문이 없는 변수 선언문은 무시한다.

var msg;
console.log(msg); // 무시하고 전에 선언했던 거 출력



// 2. 함수 레벨 스코프

var i = 0;
for(var i=0; i<10; i++){}
    console.log(i);


    // 3. 변수 호이스팅
    console.log(test); // 호이스팅 덕분에 오류는 안뜸. 값이 들어가지는 않고! 선언만 되있는 상태
    test = "반갑습니다.";
    console.log(test);
    var test;



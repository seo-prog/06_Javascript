
// 중첩 함수
// 함수 내부에 정의된 함수를 중첩함수 또는 내부 함수 라고 한다.
// 중첩 함수를 포함하는 함수는 외부함수 라고 한다.

function outer(){
    let outerVal = "외부함수";
    
    function inner(){
        let innerVal = "내부함수";
        console.log(outerVal, innerVal); // 내부함수에서는 외부함수를 가져올 수 있다.
    }
    inner();
}
outer();
// 외부에서는 내부에 있는 함수에 접근할 수 없다.
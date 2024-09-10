// 프로퍼티 접근 

let dog= {
    name : " 뽀삐",
    eat : function(food){
        console.log(`${this.name} 은 ${food} 를 맛있게 먹어요`);

    }
}

console.log(dog.name);
dog.eat("고구마");

dog["eat"]("고구마");
console.log(dog['name']);


let obj={
    'dash-key' : 'dash-value', // q변수가 아니라 문자니까 ''
    0:1

}

// 식별자 네이밍 규칙 // 대괄호 표기법
// 허용되는 문자
// 영문자, 숫자(첫 글자는 올 수 없음)
// 예약어는 사용할 수 없음
// 대소문자를 구분함
// 카멜케이스로 작성함

console.log(obj['dash-key']); // 위에 키값이 규칙에 어긋났기떄문에  [] 사용해서 꺼내줘야 한다.
console.log(obj['0']);
console.log([0]);
// console.log(obj.0); 이건 안된다 !


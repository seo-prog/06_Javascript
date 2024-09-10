// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다..

let student = {
    name : "유관순",
    age : 16
};

console.log(student);

let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "":"",
    0:1, // ! 숫자키는 문자로 바뀐다음에 제일 먼저 출력된다. (오름차순으로)
    var : "var",
    normal : "new normal"
};
// 키값은 기본적으로 문자열
// 같은 키 값이 2개가 있으면 마지막 껄로 덮어써서 출력된다.
// 빈 문자열도 키 값이 가능하다. 에러없이 잘 출력되지만 권장하지는 않는다.
// var 는 예약어이다. 예약어도 에러는 안나지만 권장하지는 않는다.



//프로퍼티 키를 동적으로 생성했다고 함.
let key2 = "test"; 
// name 이 들어가는게 아니라 student.name을 키값으로 넣으면 "유관순"이 키값이 된다.
// 변수 이름이 들어가는게 아니라 실행될 때, 할당된 값이 들어간다.
obj[key2] = "test value"; // 프로퍼티 추가하는 문법이다.
// !!!!!!!!!!! obj 라는 객체에 key2 라는 이름을 가진 키와 "test value"를 값으로 가진 value 를 키+value 로 프로퍼티에 한줄을 추가해준다.
console.log(obj);
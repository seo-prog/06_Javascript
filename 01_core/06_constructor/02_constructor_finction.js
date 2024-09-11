
// 생성자 함수

// 객체 리터럴에 의한 객체 생성
const student1 = {
    name : "유관순",
    age : 16,
    getInfo(){
        return `${this.name}은 ${this.age}세 입니다. `
    }
}

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릭 처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있따.

function Student(name, age){
     // 생성자 함수는 첫글자를 대문자로 쓴다. 
     this.name = name,
     this.age = age,
     this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다. `
     }
}

// 일반적으로 객체는 오브젝트. 자바에서 클래스로 만들어진 객체ㅔ는 인스턴스. 
// 기본적으로 자바스크립트에서는 1. 클래스에서 만들어진 객체, 2.생성자함수로 만들어진 객체만 인스턴드라고 부를 수 있따.
// 가장 큰 범주인 오브젝트 안에 인스턴스가 들어있다고 보면 되는거다.

const student3 = new Student("장보고",30);
const student4 = new Student("최서연",10);

// 메소드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());

class test{
    constructor(name,age,getInfo){
        this.name=name;
        this.age=age;
        this.getInfo = getInfo; //바로 값을 넣어줘도 되고 따로 넣어줘도 된다.
    }
}

const student5 = new test("이순신",30,function(){});
console.log(student5);

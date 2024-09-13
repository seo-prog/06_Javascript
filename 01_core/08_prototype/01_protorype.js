
// 프로토타입

/**
 * 모든 객체는 자신의 부모 객체로 연결되는 프로퍼티인 [protitype] 을 가지고 있음.. 
 * 이떄 상속으ㅡㄹ 받는 부모 객체를 프로토타입 이라고 부른다..
 * 객체가 특정 프로퍼티나 메소드를 찾을 떄 먼저 그 객체에서 찾고 없으면 객페의 프로토타입에서 찾는다..
 * 프로토타입이 또ㅓ 다른 프로토타입을 가지며 부모 객체를 따라 올라가고 프로토타입 체인이 형성된다ㅓ.
 * 일반객체는 오브젝트의 후손이다. 그래서 toString 을 쓸 수 있는겨..
 */

const obj = {}; // 일반 객체 생성
console.log(obj.toString()); // 오버라이드 안했으면 주솟값 (타입을)뱉는다..고 보면됨.[object Object] 이거 뱉음
console.log(Object.prototype.hasOwnProperty("toString"));
// 오브젝트가 toString 을 가지고 있는지 체크한거임.

const obj2 ={
    toString(){
        return "custom toString";
    }
};
console.log(obj2.toString());


// Object.create 를 이용한 상속

const use = {
    greet(){
        console.log(`안녕, ${this.name}`);
    }
};

const students = Object.create(use);

students.name = "홍길동";
students.study = function(){
    console.log(`${this.name}은 공부중이야 ..`);
}

students.greet();
students.study();


// _proto_방식
const user2 = {
    greet(){
        console.log("hello");
    }
};

const student2 = {
    name : "유관순"
}

student2.__proto__=user2;
student2.greet();

/**
 * __proto 는 사용하지 않는 것을 권장한다..
 * 안전성, 성능, 명확성 관련 문제가 많기 떄문이다.
 * 
 */

// 그!래!서!
// 최근 ES6 이후로는 extend 를 이용한 클래스 기반 상속을 많이 사용한다.

class User{
    constructor(name){
        this.name = name;
    }

greet(){
    console.log(`안녕하세요 ${this.name}`);
}
}

class Student extends User{
    constructor(name,grade){
   super(name)
   this.grade = grade;
    }
    study(){
        console.log(`${this.name}님은 ${this.grade}학년에서 공부중 .. `);
    }
}

const student1 = new Student("홍길동",3);
student1.greet();
student1.study();








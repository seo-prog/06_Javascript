// 일반 함수와 다른점
function Student(name,age){
    this.name = name;
    this.age = age; // 일반 함수이므로 this 가 전역을 가리키게 되므로 일반 함수에서는 this 가 전역을 뜻하게 된다.
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다. ~!`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다..
// new 연산자와 함꼐 호출이면 생성자 함수로 동작한다..
// 만약, new 연산자와 함꼐 호출하지 않으면 일반 함수로 동잗한다.

const student = Student("최서연",15);
console.log(student); // new 연산자가 없으니 일반 함수로 동작해서 undefined 나온다.
console.log(age);

// ES6 에서는 NEW .TARGET 을 지원한다..
// 생성자 함수가 new 없이 호출 되는 것을 방지하기 위해

function Dog(name,age){

    if(!new.target){ // new 를 안붙인 경우를 막아주기 위해 // target 은 그냥 여기서 확인을 위해 제공해주는 
        return new Dog(name,age);
    }
    this.name = name;
    this.age = age;
}

// 대부분의 빌트인 (기본적으로 제공해주는 생성자 함수를 뜻한다. 우리가 만든거 말고 !)생성자 함수 (object, string, Number ...)은
// new 연산자와 함꼐 호출 되었는ㅁ지를 확인한 후 적절하게 반환한다.
const obj = Object();
console.log(obj);
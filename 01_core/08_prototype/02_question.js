// Anamal 과 dog 클래스 구현
// Animal 은 name 속성과 speak 메소드를 가짐
// speak 는 나는 [name] 을 출력
// dog 는 animal 을 상속받고
// breed 속성을 가짐. 개의 품종. bark 메소드를 가지고 메소드는 "나는 [breed]" 를 출력


class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`나는 ${this.name}`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
    bark(){
        console.log(`나는 ${this.breed}`);
    }
}

const add2 = {
    namee

}


const add = new Dog("뽀삐","비숑");
add.speak();
add.bark();

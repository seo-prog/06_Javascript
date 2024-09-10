// 프로퍼티 값 단축 구문

let id = 'p-0001';
let price = 30000;

let product = {
    id : id,// 'id' = id 로 생각. 뒤의 값은 위 변수의 값
    price : price
}

console.log(product);

// ES6 단축 문법

let pruduct2 = {id, price};
console.log(pruduct2);



// 메소드 단축
let dog = {
    name : "흰둥이",
    eat : function(food){
        console.log(`${this.name} 은 ${food} 를 맛있게 먹어요`);
    }
}

dog.eat("고구마");

 let dog2 = {
    name : "뽀삐",
    eat(food){
        console.log(`${this.name} 은 ${food} 를 맛있게 먹어요`);

    }
 }
 dog2.eat("고구마");



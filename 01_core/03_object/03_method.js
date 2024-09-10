// 자바스크립트 함수는 프로퍼티 값으로 사용할 수 있다..

let dog = {
    name : "뽀삐",
    // eat : function(food){
    //     console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    // }

    // eat : (food)=>{ // 화살표함수는 this 값을 못다.
    //     console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    // }

    eat : (name, food)=>{ // 화살표함수는 this 값을 못다.
        console.log(`${name}는 ${food}를 맛있게 먹어요`);
    }
}

dog.eat("뽀삐","고구마");
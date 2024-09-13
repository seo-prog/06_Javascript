
// 배열 메소드

const arr = [];
const arr2 = Array(); // 생성자 함수

// indexOf
// indexOf : 배열에서 요소가 위피한 인덱스를 리턴
// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스 리턴
// includes : 베열에 해당 요소 포함 여부 리턴

const foodList = ["물회", "삼계탕","냉면","수박","물회"];
console.log(`foodList.indexOf("물회): ${foodList.indexOf("물회")} `);
console.log(`foodList.insezOf("물회,1) ${foodList.indexOf("물회",1)}`); // 탐색시작 인덱스 위치를 나타앰/ 얘는 1번부터 뒤로 쭉 검색한다는 뜻
console.log(`foodList.indexOf("삼겹살") : ${foodList.indexOf("삼겹살")}`); // 없으면 -1 을 반환

console.log(`foodList.lastIndexOf("물회") : ${foodList.lastIndexOf("물회")}`);
console.log(`foodlist.lastIndexOf("물회",1): ${foodList.lastIndexOf("물회",1)}`); // 1번 인덱스 까지만 검색/ 인덱스 번호 0번, 1번만 검색한다는 뜻
console.log(`foodList.lastIndexOf("삼겹살"): ${foodList.lastIndexOf("삼겹살")}`);

console.log(`foodList.includes("물회"): ${foodList.includes("물회")}`);
console.log(`foodList.includes("삼겹살"): ${foodList.includes("삼겹살")}`);


// .push : 배열의 맨 뒤에 요소 추가
// .pop : 배열의 맨 뒤에 요소 반환 후 제거

const chineseFood = ["짜장면", "짬뽕", "탕수육"];
console.log(`push 전 chineseFood : ${chineseFood}`);

chineseFood.push("칠리새우");
chineseFood.push("유린기");

console.log(`push 후 chineseFood : ${chineseFood}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);

console.log(`pop 후 chineseFood : ${chineseFood}`);

// ubshift : 배열의 맨 앞에 요소 추가
// shift : 배열의 맨 앞 요소 반환 후 제거


chineseFood.unshift("탕수육");
chineseFood.unshift("칠리새우");

console.log(`unshift 후 chineseFood : ${chineseFood}`);

console.log(`shift : ${chineseFood.shift()}`);
console.log(`shift : ${chineseFood.shift()}`);
console.log(`shift 후 chineseFood  : ${chineseFood}`);

// concat : 두 개 이상의 배열을 결합

const idol1 = ['아이브', '에스파'];
const idol2 = ['뉴진스', '르세라핌'];
const idol3 = ['핑클', 'SES'];

const mix = idol1.concat(idol2);
console.log(mix);

const mix2 = idol3.concat(idol1,idol2);
console.log(mix2);

// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치 요소 제거 후 추가

const front = ["html", "css", "javascript", "jQuery"];

//slice(시작 인덱스, 종료 인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`); // 1번부터 3번 전까지 출력되면서 원본에는 영향x
console.log(front);

// splice(인덱스, 제거수, 추가값1, 추가값2, ....)
console.log(`front splice(3,0,"react"): ${front.splice(3,0,"react")}`);
console.log(front);

console.log(`front.splice(4,1,"flutter") : ${front.splice(4,1,"flutter")}`); // 4번쨰 인덱스 부터 1개 지운다는 의미


// join :  배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕", "초콜릿", "껌", "과자"];
console.log(`snakeList.join() ; ${snackList.join()}`); // 아무것도 입력하지 않았을 떄는 기본값이 ,이다.
// 기본적으로 template리터럴로 쓰면 tostring 이 생략되어있다. 그래서 그냥 snakeList 는 배얄로 나오는데 이거는 문자열로 나온다 ~!
console.log(`snakeList.join("/") ; ${snackList.join("/")}`);

// reverse : 배열의 순서를 뒤지ㅣㅂ음
console.log(`[1,2,3,4,5].reverse : ${[1,2,3,4,5].reverse()}`);











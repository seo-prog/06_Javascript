
// 배열 정렬 기준

let numbers = [];

for(let i=0; i<10; i++){
    numbers[i]=Math.floor(Math.random()*100)+1;
}
console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`); // 두 자릿수 세자릿수 상관없이 앞자리숫자만 가지고 비교하므로 2 보다 19가 앞에 나온다.


// 배열은 기본적으로 문자열 정렬이 되므로 한자리수, 두자리수가 올바르지 않게 정렬되는 모습을 확인할 수 있음
// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

// numbers.sort(compare);
// console.log(" 매개변수로 compare 전달 후 숫자 오름차순 정렬");
// console.log(numbers);


// sort내에서 자체적으로 a-b 가 양수면 순서를 바꿔줄꺼라임. 내부의 로직까지는 신경쓸 필요없음. 걍 일케 알고있으면 될듯.
// 내림차순은 b-a
numbers.sort((a,b)=>a-b);
console.log(numbers);



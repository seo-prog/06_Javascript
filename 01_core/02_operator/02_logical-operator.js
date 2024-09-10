// 논리 연산자
// ||, &&, !

// OR, AND 연산자 표현식의 결과가 떄로는 불리언이 아닐 수 있다.

console.log('apple' || 'banana');
// 문자열이 있으니까 true. 앞에가 true 면 앞에꺼를 반환한다.
// 둘다 truthy 면 앞에꺼를 뱉고, 
console.log(false||'banana'); // 앞에가 false 니까 true 인 뒤에꺼를 뱉는다
console.log('apple' && 'banana'); // and 연산을 하므로 둘 다 검증을 해야하니까 뒤에꺼를 뱉는다.
console.log(null && 'banana'); // && 연산자는 앞이 falsy 면 앞에꺼를 반환한대 ㅠㅠ 글서 빈 문자열을 앞에 넣어도 앞에꺼인 빈 문자열이 콘솔에 출력된대. 
// falsy 는 false로 생각하도록 하는것이고, false는 아니다. falsy는 false로 본다는 뜻.
console.log(false && 'banana'); // 이 연산도 and 연산이니까 앞에꺼부터 검증하므로 false가 나와버렸으므로 앞에꺼를 반환하게 된다.

console.log("=========================");
let num = 1;

if(num % 2 == 0 ){
    console.log(" 짝수입니다. ");
}else{
    console.log(" 홀수입니다. ");
}


num % 2 == 0 && console.log(" 짝수입니다. "); // and 연산이므로 앞에꺼부터가 이미 false니까 아예 출력을 안해준다. 
num % 2 == 0 || console.log(" 홀수입니다. "); 
// or 연산이므로 앞에꺼부터가 true 니까 뒤에께 출력된다.
// 앞에께 true였으면 뒤에꺼는 아예 읽지를 않으니까 console 창에 출력이 안되었을것이다.
// 한마디로 그냥 연산자에 따라 읽으면서 참/거짓이 판단이 되는 순간 결과를 뿜는다고 생각하면 편하다.


// console 하고싶은 객체가 null 이면 오류가 난다.
let obj = null;
// 객체라고 기대하는 변수가 null 또는 undefined  일 때
// let val1 = obj.value; --> 안에 값을 찾으려는데 null 이니까 오류가 나게된다. 그러므로 밑의 형식으로 적어주거나 또는 ?를 사용하여 적어줘야 콘솔창에 오류가 나지 않을 수 있다.
let val = obj && obj.value; 
let val1 = obj?.value;


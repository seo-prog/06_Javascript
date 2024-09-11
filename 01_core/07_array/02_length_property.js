

// length 는 요소의 객수를 나타내는 0 이상의 정수를 값으로 갖는다..
console.log([].length);
const arr = [1,2,3,4,5];
console.log(arr.length);


// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6);
// 인자로 전달한 요소 추가
console.log(arr.length);
arr.pop();
// 마지막 요소 제거
console.log(arr.length);

arr.length = 3;
console.log(arr); // 뒤에께 자동으로 잘리고 길이를 3으로 걍 댕강 잘라버린다. // 그냥 삭제된거임
// 현재의 length 보다 작은값을 주면 배열의 길이가 줄어든다.
// 현재의 length 보다 큰 값을 주면 
arr.length = 10;
console.log(arr); // 값이 들어가거나 그렇지는 않고 그냥 빈 공간이 늘어난다고 보면 된다.

const arr2 =[null,2, ,4];
console.log(arr2); // 자바스크립트 배열은 일부가 비어있는 것도 허용허기 때문에 스페이스바를 누르면 한 칸이 생긴다.
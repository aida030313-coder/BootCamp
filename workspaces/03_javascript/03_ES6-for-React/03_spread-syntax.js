// 배열에서의 전개 구문
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// 스프레드 연산자를 사용하면 배열의 요소를 개별 값으로 펼칠 수 있음
console.log(...nums);

// 배열 연결
const newNums = [...nums, 6, 7, 8, 9, 10];
console.log(newNums);
console.log(nums);   // 불변성 유지

// 배열 병합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];   // 새 배열 생성
console.log(newArr);


// 객체에서의 전개 구문
// 기존 객체
const user = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남구"
};

// 객체 복사 및 연결
const newUser = {
    ...user,    // 기존 user 객체 내용 모두 가져옴
    dream: "프론트엔드 개발자",
    hobby: "프로그래밍"
};
console.log(newUser);

// 객체 병합
const fruitBasket1 = {
    fruit1: "apple",
    fruit2: "banana",
    fruit3: "kiwi"
};

const fruitBasket2 = {
    fruit4: "peach",
    fruit3: "orange"   // fruitBasket1의 fruit3 kiwi는 orange로 덮어씌워짐
};

const mergedBasket = {
    ...fruitBasket1,
    ...fruitBasket2
};

console.log(mergedBasket);
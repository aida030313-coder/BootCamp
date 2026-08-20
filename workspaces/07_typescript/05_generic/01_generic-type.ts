export {}

function getData1(anything: any): any {
    return anything;
}

const num1 = getData1(1);   // num1 == 1
const str1 = getData1('string');   // str1 == string

// 반환되는 값들은 무조건 any 타입이 됨 == typescript에서 타입 정보 잃어버림 
// => 코드 제안X, 잘못된 메소드 호출/프로퍼티에 접근 시 컴파일 에러X
console.log(num1);
console.log(num1.toUpperCase());
console.log(str1);

// 각 타입별 함수를 정의하는 방법
// => 동일한 로직의 함수가 타입이 다르다는 이유만으로 여러 개 정의한다면 중복코드만 발생한다. (X)

/*
  📌 제네릭 타입 (Generic Type)
  1. 제네릭 정의 : 타입을 미리 정해두지 않고 사용하는 시점에서 지정할 수 있게 하는 기능 
  2. 즉, 타입을 파라미터로 받아 처리하는 타입
  3. 한가지 타입에만 국한되지 않고, 여러 타입에 대해 동일한 구조나 동작을 보장할 수 있음 
  4. 주로 컬렉션(배열, 객체) 타입에 사용
  5. 작성법
     <T> : 타입 파라미터 (T는 타입 변수, 임의의 타입을 의미)
*/

function getData2<T>(anything: T): T {
    return anything;
}
const num2 = getData2<number>(10);
const str2 = getData2<string>('str');

console.log(num2.toFixed())        // 메소드 추천
// console.log(num2.toUpperCase());   // 잘못된 접근을 컴파일 에러로 알려줌

// 제네릭 타입 별칭
type Box<T> = {
    value: T
}

// 문자열 담는 박스
const box1: Box<string> = {
    value: 'hello'
}

// 숫자 담는 박스
const box2: Box<number> = {
    value : 10
}

// ---------------------------
// 인터페이스에서의 제네릭

// 유저 타입
interface User {
    id: number
    name: string
    email: string
    isAdmin: boolean
}

// API 요청 후 응답데이터에 대한 타입 정의
interface ApiResponse<T> {
    status: 200 | 400 | 404 | 500
    success: boolean
    data: T
}

// 한 유저데이터를 조회 요청하는 API
const userResponse: ApiResponse<User> = {
    status: 200,
    success: true,
    data: {
        id: 1,
        name: '홍길동',
        email: 'hong@example.com',
        isAdmin: false
    }
}

// 여러 유저 데이터 조회 요청하는 API
const usersResponse: ApiResponse<User[]> = {
    status: 200,
    success: true,
    data: [
        {
            id: 1,
            name: '홍길동',
            email: 'hong@example.com',
            isAdmin: false
        },
        {
            id: 2,
            name: '김길동',
            email: 'kim@example.com',
            isAdmin: true
        }
    ]
}

// 에러 메시지를 응답하는 ApiResponse
const errorResponse: ApiResponse<{message: string}> = {
    status: 500,
    success: false,
    data: {
        message: 'Internal Server Error'
    }
}

// const [count, setCount] = useState<number>(0)

// interface User {
//     id: number
//     name: string
//     email: string
//     isAdmin: boolean
// }

// const [user, setUser] = useState<User | null>(null);
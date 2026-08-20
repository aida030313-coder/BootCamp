export {};

/*
  📌 인터페이스(Interface)
  1. 인터페이스는 객체의 구조를 정의하는 강력한 타입 선언 방식
  2. 코드상의 객체가 가져야 할 프로퍼티와 메서드를 명시적으로 정의
  3. 타입 별칭(type alias)와 비슷하지만, 
     인터페이스는 선언 병합(중복 선언 후 확장)이 가능하고 클래스와 연동이 잘 됨
  4. 작성법
     interface 인터페이스명 {
       프로퍼티: 타입;
       메서드: 타입;
     }
*/

interface User {
    id: number
    name: string
    email?: string
}

const user1: User = {
    id: 1,
    name: '홍길동'
}

const user2: User = {
    id: 2,
    name: '김길동',
    email: 'kim@example.com'
}


/*
  📌 인터페이스 확장 (Interface Extension)
  1. 인터페이스는 extends 키워드를 사용하여 확장 가능
  2. 확장된 인터페이스는 기존 인터페이스의 모든 프로퍼티와 메서드를 상속받음
  3. 확장된 인터페이스는 기존 인터페이스의 프로퍼티와 메서드를 추가로 정의할 수 있음
  4. 작성법
     interface 인터페이스명 extends 인터페이스명 {
       프로퍼티: 타입;
       메서드: 타입;
     }
*/

interface Student extends User {
    // User 인터페이스의 프로퍼티 상속받음
    grade: number
}

const stu1: Student = {
    grade: 1,
    id: 3,
    name: '유관순'
}

/*
  📌 인터페이스 선언 병합 (Interface Merging)
  1. 인터페이스는 선언 병합이 가능
  2. 동일 이름의 인터페이스가 여러 개 있을 경우 병합됨
*/

interface Person {
    name: string
}

interface Person {
    age: number
}

const per: Person = {
    name: '이순신',
    age: 30
}

/*
    Type Alias vs Interface: 객체의 타입(구조)을 정의하는데 사용

    1. 확장
    Type Alias: 확장 불가(extends 키워드 사용 불가) - 단, intersection으로 대체 가능
    Interface:  확장 가능(extends 키워드 사용 가능)

    2. 병합
    Type Alias: 병합 불가 (동일 이름의 타입 별칭 선언 불가)
    Interface : 병합 가능 (동일 이름의 인터페이스 선언 가능)

    - API 응답데이터, React 컴포넌트를 props 등 객체 구조 정의시에는 Interface 사용 권장
    -> extends를 통한 확장이 더 직관적이고, 선언 병합 기능으로 유연성을 제공

    - 유니언 타입 정의 시, 원시 값에 의미 부여할 때, 튜플 정의할 때, 복잡한 타입 정의할 때 Type Alias 사용 권장
    
*/

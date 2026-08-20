export {}

interface Student {
  id: number;
  name: string;
  age: number;
  email?: string; // email은 선택적 속성 
}

/*
  📌 Partial<T> 타입 
  1. T 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
  2. 예시 
      interface Person {
        name: string;
        age?: number;
      }
      type PartialPerson = Partial<Person>;
      PartialPerson은 { 
        name?: string; 
        age?: number 
      } 
        타입과 동일
*/

// 학생 정보를 수정하는 함수
// function updateStudent(student: {id?: number, name?: string, age?: number, email?: string})
function updateStudent(student: Partial<Student>): void {
    console.log('학생 업데이트 로직 수행 중... ');
}

updateStudent({
    id: 1,
    name: 'Alice'
})

updateStudent({
    id: 1,
    age: 20
})

/*
  📌 Required<T> 타입 
  1. T 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
  2. 예시 
      interface Person {
        name: string;
        age?: number;
      }
      type RequiredPerson = Required<Person>;
      RequiredPerson은 { 
        name: string; 
        age: number 
      } 
        타입과 동일
*/

// 학생 정보를 조회하는 함수
function detailStudent(student: Required<Student>) {
    console.log('학생 상세 조회 로직 수행 중...');
}

detailStudent({
    id: 2,
    name: '홍길동',
    age: 22,
    email: 'hong@example.com'
})

/*
  📌 Readonly<T> 타입
  1. T 타입의 모든 프로퍼티를 읽기 전용으로 바꿔주는 타입
  2. 예시 
      interface Person {    
        name: string;
        age: number;
      }
      type ReadonlyPerson = Readonly<Person>;
      ReadonlyPerson은 { 
        readonly name: string;  
        readonly age: number;
      } 
      타입과 동일
*/

// 학생 데이터를 '불변성'을 지키며 사용하고 싶을 때
function displayStudentInfo(student: Readonly<Student>) {
    // student.name = '변경'
    console.log('학생 정보 출력');
}

displayStudentInfo({
    id: 3,
    name: '김길동',
    age: 20
})

/*
  📌 Pick<T, K> 타입
  1. T 타입에서 K 프로퍼티들만 뽑아서 새로운 타입을 만들어주는 타입
  2. 예시 
      interface Person {  
        name: string;
        age: number;
        email: string;
      }
      type PickedPerson = Pick<Person, 'name' | 'email'>;
      PickedPerson은 { 
        name: string;   
        email: string;
      } 
      타입과 동일
*/

// 학생 목록(출석부)을 전달받아 출력하는 함수
function printStudentList(student: Pick<Student, 'id' | 'name'>[]) {
    console.log('출석부 출력 중...');
}

printStudentList([
    {id: 1, name: '홍길동'},
    {id: 2, name: '김길동'},
    {id: 3, name: '이길동'}
])

/*
  📌 Omit<T, K> 타입
  1. T 타입에서 K 프로퍼티들만 제외한 나머지 프로퍼티들로 새로운 타입을 만들어주는 타입 
  2. 예시
      interface Person {  
        name: string; 
        age: number;
        email: string; 
      }
      type OmittedPerson = Omit<Person, 'email'>;
      OmittedPerson은 { 
        name: string;   
        age: number;
      }
      타입과 동일
*/

// 신규 학생을 등록하는 함수
function registStudent(student: Omit<Student, 'id'>) {
    console.log('등록 중...');
}

registStudent({
    name: '김길동',
    age: 30
})

/*
  📌 Record<K, T> 타입
  1. K 프로퍼티들을 키로 가지고, T 타입의 값들을 가지는 객체 타입을 만들어주는 타입
  2. 예시 
      type Role = 'admin' | 'user' | 'guest';
      type RolePermissions = Record<Role, string[]>;
      RolePermissions은 { 
        admin: string[];  
        user: string[];  
        guest: string[];
      } 
      타입과 동일
*/

// 'A', 'B', 'C'학점 별로 학생들을 관리해야 될 때
type Grade = 'A' | 'B' |'C';

type Gradestudents = Record<Grade, Student[]>
/*
    {
        A: Student[],
        B: Student[],
        C: Student[]
    }
*/

const gradestudents: Gradestudents = {
    A:[
        {id: 1, name: '홍길동', age: 30}
    ],
    B: [],
    C: []
    // D: []
}



//--------------------------------------------------------------------------


/*
  📌 Exclude<T, U>, Extract<T, U> 타입
  1. Exclude : T 타입(유니언)에서 U 타입의 프로퍼티를 제외한 나머지 타입들로 새로운 타입을 만들어주는 타입
  2. Extract : T 타입(유니언)에서 U 타입의 프로퍼티와 중복된 프로퍼티들만 추출하여 새로운 타입을 만들어주는 타입
*/

// 사용자 역할
type UserRole = "SuperAdmin" | "Admin" | "Editor" | "Viewer" | "Guest";

// 직원 역할
type StaffRole = Exclude<UserRole, "Viewer" | "Guest">;
// StaffRole == "SuperAdmin" | "Admin" | "Editor"

// 관리자 역할
type AdminRole = Extract<UserRole, "SuperAdmin" | "Admin">
// AdminRole == "SuperAdmin" | "Admin"

// 유틸리티의 핵심은 매번 내가 원하는 새로운 타입을 작성하는 것이 아닌,
// 기존 타입을 재사용하면서 내가 원하는 타입으로 재가공을 할 수 있는 것이다.
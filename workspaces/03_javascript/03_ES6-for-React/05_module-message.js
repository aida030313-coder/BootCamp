// 외부 모듈(module-person.js)에 export한 값 가져다 쓰기

// * named export 한 것을 import 할 때는 {}로 구조분해해서 가져와야 한다.
// 다른 이름으로 사용하고자 할 경우 as로 이름을 바꿀 수 있다.
import { name, age, hobby as h, dream as d } from './04_module-person.js'

export const person = {
    name: name,
    age: age,
    // hobby: hobby,
    hobby: h,
    // dream: dream,
    dream: d
};

// console.log(person);

const returnMessage = () => {
    const message = `${name}님 환영합니다!`;
    return message;
};

// default는 한 파일당 딱 하나만 사용 가능
export default returnMessage;
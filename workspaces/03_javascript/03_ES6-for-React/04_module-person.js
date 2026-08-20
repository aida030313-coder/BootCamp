// 각 변수들을 외부에서 이름을 참조해서 쓸 수 있도록 named export

// 방법 1) 선언문 앞에 export 붙이기
export const name = "홍길동";
export const age = 40;

// 방법 2) 미리 선언해두고 한꺼번에 export
const hobby = ["running", "cooking"];
const dream = "programmer";

export { hobby, dream };

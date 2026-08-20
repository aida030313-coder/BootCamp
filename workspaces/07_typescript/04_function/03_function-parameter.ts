export {}

// 1) 기본 매개변수 타입 지정
function getUserInfo(name: string, age: number): string {
    return `${name}은(는 )${age}살 입니다. `;
}
console.log(getUserInfo('홍길동', 20));
// console.log(getUserInfo(20, '홍길동'));   // 순서를 일치시켜야함
// console.log(getUserInfo('홍길동'));       // 개수를 일치시켜야함

// 2) 옵셔널 매개변수
function getMessage(name: string, msg?: string): string {
    return `${msg || 'hello'}, ${name}`;
}
console.log(getMessage('hong', 'goodbye'));
console.log(getMessage('hong'));

// 3) 기본값 매개변수
function printMessage(msg: string = 'hi'): void {
    console.log(msg);
}
printMessage('hello');
printMessage();

// 4) 유니언, 리터럴 적용 가능
function setStatus(status: 'success' | 'error' | 'pending'): void {
    console.log(status);
}
setStatus('success');
// setStatus('loading');

// 5) 나머지 매개변수 (Rest parameter)
function joinString(separator: string, ...strings: string[]) {
    console.log(strings.length);
    return strings.join(separator);
}
console.log(joinString("-", "hello", "world"));
console.log(joinString(" ", "hello", "world", "!"));
import { auth } from '../firebase/config.js'
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// console.log(auth);

// 1) 사용자 정보 등록(회원가입) (createUserWithEmailAndPassword)
export const signUp = async (email, password) => {
    // userCredential : 인증함수(가입, 로그인 등)를 실행했을 때 반환 객체
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('회원가입 성공: ', user.uid);   // 사용자의 고유ID
    console.log('사용자 이메일: ', user.email);
    console.log('사용자 이름: ', user.displayName);
    console.log('사용자 프로필 URL: ', user.photoURL);

    return user;
}

// 테스트
// signUp('test123@example.com', 'password7890');


// 2) 사용자 정보 조회(로그인) (signInWithEmailAndPassword)
export const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('로그인 성공: ', user.uid);
}

// 테스트
// login('test123@example.com', 'password7890');


// 3) 로그아웃 (signOut)
export const logout = async () => {
    console.log('현재 로그인 되어있는 사용자 UID: ', auth.currentUser.uid);
    console.log('현재 로그인 되어있는 사용자 이메일: ', auth.currentUser.email);

    // 로그아웃
    await signOut(auth);
    console.log('로그아웃 성공');
    console.log('현재 로그인 되어있는 사용자 UID: ', auth.currentUser);
}

// 테스트
// await login('test123@example.com', 'password7890');
// await logout();


// 4) 사용자 정보 삭제(회원탈퇴) (deleteUser)
export const deleteAccount = async () => {
    await deleteUser(auth.currentUser);
    console.log('사용자 계정이 삭제되었습니다. ');
}

// 테스트
// await login("test1234@example.com", 'password7890');
// await deleteAccount();
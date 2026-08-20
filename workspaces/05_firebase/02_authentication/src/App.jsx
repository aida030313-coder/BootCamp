import { useEffect, useState } from "react"
import { auth } from './firebase/config'
import UserProfile from "./components/UserProfile";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // 인증 상태 변경 감지 (onAuthStateChanged)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("인증 관련 상태가 변경되었습니다. ");
      setUser(currentUser);
    })

    // 구독 해제
    return () => unsubscribe();
  }, [])

  return (
    <>
      {user? (
        <UserProfile/>
      ) : (
        <>
          <h2>회원가입</h2>
          <SignupForm/>
          <hr/>
          <h2>로그인</h2>
          <LoginForm/>
        </>
      )}
    </>
  )
}

export default App

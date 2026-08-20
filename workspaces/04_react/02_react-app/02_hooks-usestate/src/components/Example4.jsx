import React, {useState} from 'react'

function Example4() {

    // 각 개별 state 변수
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const handleUseIdChange = (e) => {
        setUserId(e.target.value);
    }

    const handleUsePwdChange = (e) => {
        setUserPwd(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        if(!userId.trim() || !userPwd.trim()) {
            e.preventDefault();
            alert('입력값이 누락되었습니다.')
            return;
        }

        alert(`유효성 검사 통과! 로그인 제출 진행됩니다. 
            아이디: ${userId}, 비밀번호: ${userPwd}`)
    }

  return (
    <>
        <h2>종합 예시 - 로그인 폼 (사용자 입력값을 각 개별 state 변수로 관리)</h2>
        <form action="/login" method="post" onSubmit={handleLoginSubmit}>
            <input
                type="text"
                placeholder='아이디 입력'
                name="userId"
                value={userId}
                onChange={handleUseIdChange}
            />
            <br/>
            <input
                type="password"
                placeholder='비밀번호 입력'
                name="userPwd"
                value={userPwd}
                onChange={handleUsePwdChange}
            />
            <br/>
            <button type='submit'>로그인</button>
        </form>
    </>
  )
}

export default Example4

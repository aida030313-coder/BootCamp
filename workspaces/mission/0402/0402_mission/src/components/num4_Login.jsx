import React from 'react'

function num4_Login() {
    return (
        <div>
            <h2>로그인 폼</h2>
            사용자명: 
            <input
                placeholder='사용자명'
            />
            <br/>
            비밀번호: 
            <input
                placeholder='비밀번호'
            />
            <br/>
            
            <input type='checkbox'/> 로그인 상태 유지 <br/>
            <button>로그인</button>
        </div>
    )
}

export default num4_Login

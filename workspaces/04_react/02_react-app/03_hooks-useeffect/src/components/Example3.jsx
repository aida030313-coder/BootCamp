import { useEffect, useState } from 'react'

// 마운트 시점 뿐 아니라 특정 값이 업데이트 될 때만 진행
function Example3() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // useEffect는 기본적으로 마운트 시점에 동작하고,
    // 또한 원하는 값의 변경 시점에만 동작하게 각각 만들 수 있다.
    // 그 뿐 아니라 변화 감지 대상에 변화가 없으면 쓸데없이 동작하지 않는다.

    // setUp 함수 동작 시점
    // 1. 최초 렌더링 시 Mount
    // 2. 의존성 배열에 지정된 값 변화 시
    useEffect(() => {
        console.log('username update');
    }, [user.username])   // 변경이 있는 경우 componentDidUpdate 호출

    useEffect(() => {
        console.log('password update');
    }, [user.password])   // 동작하기 전의 값과 변경 후 값을 비교하여 일치하면 호출을 건너뛴다.

    return (
        <div>
            <label>usename: </label>
            <input
                type="text"
                name="username"
                onChange={onChangeHandler}
            />
            <br/>
            <label>password: </label>
            <input
                type="password"
                name="password"
                onChange={onChangeHandler}
            />

            <h3>username: {user.username}</h3>
            <h3>password: {user.password}</h3>
        </div>
    )
}

export default Example3

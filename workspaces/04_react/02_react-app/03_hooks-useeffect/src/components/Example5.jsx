import { useState, useEffect } from 'react'

function Timer() {

    useEffect(() => {
        console.log('타이머가 시작합니다...');
        const timer = setInterval(() => {
            console.log(new Date().toLocaleDateString());
        }, 1000);

        // cleanup 함수: 컴포넌트 언마운트 시 타이머 제거
        // useEffect에서 함수를 변환하면 cleanup 함수가된다.
        // 컴포넌트가 언마운트 될 때 setInterval로 생성한 타이머를 먼저 종료한다.
        return() => {
            clearInterval(timer);
            console.log('타이머가 종료됩니다...');
        };
    }, []);

    return <h1>타이머를 시작합니다.</h1>;
}

function Example5() {

    const [isTrue, setIsTrue] = useState(false);
    return (
        <div>
            <button onClick={() => setIsTrue(!isTrue)}>타이머 토글</button>
            {isTrue && <Timer/>}
        </div>
    )
}

export default Example5

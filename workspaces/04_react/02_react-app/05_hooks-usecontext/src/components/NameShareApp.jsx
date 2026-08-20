import { useState } from 'react'
import DisplayName from './DisplayName';
import ChangeName from './ChangeName';

function NameShareApp() {

    const names = ['이영희', '김철수', '박민수', '홍길동'];

    const [currentName, setCurrentName] = useState('홍길동');
    
    return (
        <>
            <h1>이름 공유 앱</h1>

            <DisplayName currentName={currentName}/>

            <ChangeName setCurrentName={setCurrentName} names={names} />
        </>
    )
}

export default NameShareApp

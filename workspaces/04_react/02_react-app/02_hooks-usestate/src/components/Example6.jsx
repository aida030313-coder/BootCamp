import React, {useState} from 'react'

function Example6() {

    // 상태 관리
    // 1. 사용자 입력값
    // 2. 동물 목록 데이터

    const [inputValue, setInputValue] = useState('');
    const [animals, setAnimals] = useState([]);   // [] 배열형식으로 받아라

    // 추가 버튼 클릭 시 동작될 함수
    const handleAddAnimal = () => {
        // animals.push(inputValue);   // 상태변수를 직접 수정하면 React가 변경 감지를 못함

        setAnimals([
            ...animals,
            inputValue
        ])

        // 사용자가 입력한 값 초기화
        setInputValue('');
    }

    return (
        <>
            <h2>배열 활용</h2>
            <input
                type="text"
                placeholder='추가할 동물 입력'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddAnimal}>추가</button>

            <h5>현재 추가한 동물 목록</h5>
            <ul>
                {animals.map((animal, index) => <li key={index}>{animal}</li>)}
            </ul>
        </>
    )
}

export default Example6

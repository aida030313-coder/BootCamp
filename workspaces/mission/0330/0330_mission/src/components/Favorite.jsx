import React, {useState} from 'react'

function Favorite() {
    
    const [color, setColor] = useState('');
    const [fruit, setFruit] = useState('');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleFruitChange = (e) => {
        setFruit(e.target.value);
    }

    return (
        <>
            <h4>좋아하는 색상: 
                <select
                    value={color}
                    onChange={handleColorChange}
                >
                    <option value="blue">파란색</option>
                    <option value="red">빨간색</option>
                    <option value="green">초록색</option>
                    <option value="yellow">노란색</option>
                </select>
            </h4>

            <h4>좋아하는 과일: 
                <select
                    value={fruit}
                    onChange={handleFruitChange}
                >
                    <option value="apple">🍎사과</option>
                    <option value="banana">🍌바나나</option>
                    <option value="orange">🍊오렌지</option>
                    <option value="grape">🍇포도</option>
                </select>
            </h4>

            <h4>선택한 색상: {color}</h4>
            <h4>선택한 과일: {fruit}</h4>
        </>
    )
}

export default Favorite
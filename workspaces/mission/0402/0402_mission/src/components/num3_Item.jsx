import React, { useState } from 'react'

function num3_Item() {

    const [selectFruit, setSelectFruit] = useState('');

    const fruits = ['사과', '바나나', '오렌지', '포도', '딸기'];

    return (
        <>
            <h2>아이템 선택</h2>
            <div>
                {fruits.map((fruit) => (
                    <button
                        key={fruit}
                        onClick={() => setSelectFruit(fruit)}
                    >
                        {fruit}
                    </button>
                ))}
            </div>

            <div>
                선택된 과일: {selectFruit || '없음'}
            </div>

            {selectFruit && (
                <div>🎉 {selectFruit}를 선택하셨습니다! </div>
            )}
        </>
    )
}

export default num3_Item

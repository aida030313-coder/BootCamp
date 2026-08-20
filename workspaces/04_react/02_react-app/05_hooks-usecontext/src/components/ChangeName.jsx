import React from 'react'

// 상태 업데이트 함수, 이름들 데이터(names)
function ChangeName( {setCurrentName, names }) {
    return (
        <>
            {names.map((name, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentName(name)}
                    >{name}</button>
            ))}
        </>
    )
}

export default ChangeName

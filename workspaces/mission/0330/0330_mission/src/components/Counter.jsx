import React from 'react'

function Counter() {

    const [number, setNumber] = React.useState(0)

    const handleIncrease = () => {
        setNumber(number + 1);
    }

    const handleDecrease = () => {
        setNumber((prev) => prev - 1);
        // setNumber(number - 1);
    }

    const reset = () => {
        setNumber(0);
    }

    return (
        <>
            <div>
                <p>{number}</p>
                <button onClick={handleDecrease}> -1 </button>
                <button onClick={reset}>초기화</button>
                <button onClick={handleIncrease}> +1 </button>
            </div>
        </>
    )
}

export default Counter
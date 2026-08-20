'use client'

import { useState } from "react";

export default function CounterButton() {

    const [ count, setCount ] = useState<number>(0);

    const handleClick = ():void => {
        setCount(count + 1)
    }

    return (
            <button
                className="px-4 py-2 rounded bg-green-100 text-center font-bold text-green-700"
                onClick={handleClick}
            >
                카운팅: {count}
            </button>
    );
}
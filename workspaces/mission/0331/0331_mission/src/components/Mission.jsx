import { useEffect, useState } from 'react'

function Mission() {

    const [prom, setProm] = useState('');
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState(0);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (prom === inputText) {

                const alertTime = Date.now() - startTime;
                alert(`${alertTime}(ms)`)
                
                setProm('');
                setInputText('');
                setStartTime(Date.now());
            }
        }
    }

    useEffect(() => {
        const prom = prompt("문자열을 입력해주세요. " );
        setProm(prom);
        setStartTime(Date.now())
    }, []);


    return (
        <>
            <h2>{prom}</h2>
            <input
                type="text"
                value={inputText}
                onKeyDown={handleEnter}

                // input에 타이핑이 쳐지도록.
                onChange={(e) => setInputText(e.target.value)}
            />
        </>
    );
}

export default Mission
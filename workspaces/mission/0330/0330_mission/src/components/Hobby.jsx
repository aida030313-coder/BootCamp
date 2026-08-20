import React from 'react'

function Hobby() {

    const { useState } = React;

    const [read, setRead] = useState(false);
    const [mu, setMu] = useState(false);
    const [sport, setSport] = useState(false);
    const [code, setCode] = useState(false);

    return (
        <>
            <input
                type='checkbox'
                id='reading'
                checked={read}
                onChange={(e) => setRead(e.target.checked)}
            />
            <label htmlFor='reading'>📚독서</label> <br/>

            <input
                type='checkbox'
                id='music'
                checked={mu}
                onChange={(e) => setMu(e.target.checked)}
            />
            <label htmlFor='music'>🎵음악</label> <br/>

            <input
                type='checkbox'
                id='sports'
                checked={sport}
                onChange={(e) => setSport(e.target.checked)}
            />
            <label htmlFor='sports'>🤼운동</label> <br/>

            <input
                type='checkbox'
                id='coding'
                checked={code}
                onChange={(e) => setCode(e.target.checked)}
            />
            <label htmlFor='coding'>💻코딩</label>
            
            <p>
                {read ? "reading" : ""}
                {mu ? "music" : ""}
                {sport ? "sports" : ""}
                {code ? "coding" : ""}
            </p>
        </>
    )
}

export default Hobby
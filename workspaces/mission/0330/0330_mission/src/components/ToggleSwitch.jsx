import React from 'react'

function ToggleSwitch() {

    const { useState } = React;

    const [contentChecked, setContentChecked] = useState(false);
    const [darkmodeChecked, setDarkmodeChecked] = useState(false);

    return (
        <>
            <input
                type='checkbox'
                id='content'
                checked={contentChecked}
                onChange={(e) => setContentChecked(e.target.checked)}
            />

            <label htmlFor='content'>콘텐츠 표시: {contentChecked ? "켜짐" : "꺼짐"} </label>

            <br/>

            <input
                type='checkbox'
                id='darkmode'
                checked={darkmodeChecked}
                onChange={(e) => setDarkmodeChecked(e.target.checked)}
            />

            <label htmlFor='darkmode'>다크 모드: {darkmodeChecked ? "🌙" : "☀️"} </label>

            <br/>
            <b>{contentChecked ? "🎉 이 메시지는 조건부로 표시됩니다!" : ""}</b>
        </>
    )
}

export default ToggleSwitch
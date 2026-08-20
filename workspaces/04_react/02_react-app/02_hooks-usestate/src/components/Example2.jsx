import React from 'react'

function Example2() {

    const { useState } = React;

    const [isChecked, setIsChecked] = useState(false);

  return (
    <>
        <h2>체크박스와 state</h2>

        <input
            type='checkbox'
            id='chk'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
        />

        <label htmlFor='chk'>체크박스</label>
        <h4> 체크여부: {isChecked ? "체크됨" : "체크안됨"} </h4>
    </>
  )
}

export default Example2

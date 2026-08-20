import React, {useState} from 'react'

function Example3() {

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    }

  return (
    <>
        <h2>셀렉트 박스와 state</h2>
        <select
            value={selectedValue}
            onChange={handleSelectChange}
        >
            <option>통신사 선택</option>
            <option>SKT</option>
            <option>KT</option>
            <option>LG U+</option>
        </select>
        <h5>선택값: {selectedValue}</h5>
    </>
  )
}

export default Example3

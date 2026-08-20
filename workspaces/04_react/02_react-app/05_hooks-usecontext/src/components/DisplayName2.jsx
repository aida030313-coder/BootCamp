import React, { useContext } from 'react'
import { NameContext } from './NameShareApp2';

function DisplayName2() {

    const {currentName} = useContext(NameContext);   // {names: [], currentName: xxx, setCurrentName: f}

    return (
        <h2>현재 선택된 이름: {currentName} </h2>
    )
}

export default DisplayName2

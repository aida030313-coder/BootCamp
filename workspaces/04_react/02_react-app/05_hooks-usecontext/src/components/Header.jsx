import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Header() {

    const {isDark} = useContext(ThemeContext);

    return (
        <header className={`header ${isDark? 'dark-mode' : ''}`}>
            <h1>This is Header</h1>
        </header>
    )
}

export default Header

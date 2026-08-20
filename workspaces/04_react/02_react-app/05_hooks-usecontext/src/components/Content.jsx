import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Content() {

  const {isDark} = useContext(ThemeContext);

  return (
    <div className={`content ${isDark ? 'dark-mode' : ''}`}>
      <p>This is Content. 본문 영역입니다.</p>
    </div>
  )
}

export default Content

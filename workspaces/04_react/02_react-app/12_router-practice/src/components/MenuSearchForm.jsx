import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MenuSearchForm() {

    const [searchInput, setSearchInput] = useState({
        condition: 'menuName',
        keyword: ''
    })

    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {
        setSearchInput({
            ...searchInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSearch = () => {
        navigate(`/menus/search?condition=${searchInput.condition}&keyword=${searchInput.keyword}`)
    }

    return (
        <div>
            <select
                name="condition"
                value={searchInput.condition}
                onChange={handleSearchInputChange}
            >
                <option value="menuName">메뉴명</option>
                <option value="categoryName">카테고리명</option>
            </select>

            <input
                type="search"
                name="keyword"
                placeholder='검색어를 입력하세요. '
                value={searchInput.keyword}
                onChange={handleSearchInputChange}
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    )
}

export default MenuSearchForm

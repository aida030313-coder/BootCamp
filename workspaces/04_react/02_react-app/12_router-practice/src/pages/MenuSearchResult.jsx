import { useState, useEffect } from 'react'
import MenuList from '../components/MenuList'
import { useSearchParams } from 'react-router-dom';
import { searchMenus } from '../api/MenuAPI';

function MenuSearchResult() {

    const [menus, setMenus] = useState([]);

    const [searchParams] = useSearchParams()

    const condition = searchParams.get("condition");
    const keyword = searchParams.get("keyword");

    useEffect(() => {
        setMenus(searchMenus(condition, keyword))
    }, [])
    
    return (
        <div>
            <h3>메뉴 검색 결과 페이지</h3>
            <MenuList menus={menus}/>
        </div>
    )
}

export default MenuSearchResult

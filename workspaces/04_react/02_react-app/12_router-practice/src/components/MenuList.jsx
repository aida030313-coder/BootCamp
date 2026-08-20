import React from 'react'
import MenuItem from './MenuItem'

function MenuList({ menus }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
            {menus.map((menu) => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
    )
}

export default MenuList
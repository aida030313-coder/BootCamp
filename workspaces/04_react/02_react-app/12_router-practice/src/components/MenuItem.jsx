import { useNavigate } from 'react-router-dom'

function MenuItem({ menu }) {

    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate(`/menus/${menu.menuCode}`)
    }

    return (
        <div style={{
            width: '300px',
            border:'1px solid black',
            padding: '0px 10px',
            cursor: 'pointer'
        }}
        onClick={handleMenuClick}>

            <h3> 메뉴명: {menu.menuName} </h3>
            <h3> 가격: {menu.menuPrice} </h3>
        </div>
    )
}

export default MenuItem

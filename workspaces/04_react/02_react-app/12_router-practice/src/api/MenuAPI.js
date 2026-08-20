import menus from '../data/menu-detail.json'

// 메뉴 전체 목록 조회용
function getMenus() {

    return menus;
}

// 메뉴 상세 조회용(조회할 메뉴 코드 필요)
function getMenuDetail(id) {

    return menus.find((menu) => menu.menuCode === parseInt(id));
}

// 메뉴 검색 결과 목록 조회용(검색조건, 검색어 필요)
function searchMenus(condition, keyword) {   // condition === 검색조건("menuName"|"categoryName"), keyword === 검색어(키워드)

    return menus.filter((menu) => menu[condition].includes(keyword));
}

export { getMenus, getMenuDetail, searchMenus }
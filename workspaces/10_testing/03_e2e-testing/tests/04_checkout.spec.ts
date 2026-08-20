import test, { expect } from "@playwright/test";

test('전체 구매 프로세스(홈페이지 접속 => 장바구니 => 주문 => 완료) 테스트', async({ page }) => {
    // 1. 홈페이지 접속
    await page.goto('/');
    // 2. 상품 선택
    // 2-1. 상품 목록 페이지로 이동
    await page.getByRole('link', {name: '상품 보기'}).click();
    await page.goto('/products');
    // 2-2. 상품 검색
    await page.getByPlaceholder('상품 검색').fill('마우스');
    await page.getByRole('button', {name: '검색'}).click();
    await expect(page.getByRole('article')).toHaveCount(4);
    // 2-3. 상품 선택
    await page.getByRole('article').first().click();
    await expect(page).toHaveURL(/\/products\/\d+/);
    await expect(page.getByRole('button', {name: '장바구니 담기'})).toBeVisible();
    // 3. 장바구니
    // 3-1. 장바구니에 추가
    await page.getByRole('button', {name: '장바구니 담기'}).click();
    // 3-2. 장바구니 페이지로 이동
    await page.getByRole('link', {name: '장바구니'}).click();
    await page.goto('/cart');
    // 4. 주문
    // 4-1. 주문 페이지로 이동
    await page.getByRole('button', {name: '구매하기'}).click();
    await page.goto('/checkout');
    // 4-2. 주문정보(배송정보, 결제정보) 입력
    await page.getByLabel('받는 사람').fill('홍길동');
    await page.getByLabel('연락처').fill('010-1234-5678');
    await page.getByLabel('주소').fill('경기도 하남시');

    await page.getByLabel('카드 번호').fill('1234-5678-9012-3456');
    await page.getByLabel('만료일').fill('12/30');
    await page.getByLabel('CVC').fill('123');
    // 4-3. 주문하기(결제하기)
    await page.getByRole('button', {name: '결제하기'}).click();
    // 5. 주문 완료 확인
    await expect(page).toHaveURL(/\/order\/\d+/)
    await expect(page.getByRole('heading', {level: 1})).toHaveText('주문이 완료되었습니다');
    await expect(page.getByTestId('order-number')).toBeVisible();
})
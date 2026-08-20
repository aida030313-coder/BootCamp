/*
    배럴 패턴
    1. 여러 컴포넌트, 함수, 클래스 등의 모듈을 하나의 파일에 모아서 재정의(re-export) 하는 방법
    2. 여러 모듈을 한 곳에서 import할 수 있음
       각 모듈을 따로따로 import할 필요없이 index.tsx 파일만 import하여 코드의 가독성이 높아짐
*/

import Header from "./Header";
import Navigator from "./Navigator";
import Footer from "./Footer";

export { Header, Navigator, Footer }


// re-export
// export { default as Header } from './Header'
// export { default as Footer } from './Footer'
// export { default as Navigator } from './Navigator'
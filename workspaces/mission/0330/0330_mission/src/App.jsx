import Counter from "./components/Counter.jsx";
import Favorite from "./components/Favorite.jsx";
import Hobby from "./components/Hobby.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import UserInfo from "./components/UserInfo.jsx";

function App() {
  return (
    <>

      {/* 1) 카운터 컴포넌트 제작 */}
      <h2>카운터</h2>
      <Counter />
      <hr />

      {/* 2) 사용자 정보 컴포넌트 제작 */}
      <h2>사용자 정보</h2>
      <UserInfo />
      <hr />

      {/* 3) 토글 스위치 컴포넌트 제작 */}
      <h2>토글 스위치</h2>
      <ToggleSwitch />
      <hr />

      {/* 4) 취향 선택 컴포넌트 제작 */}
      <h2>취향 선택</h2>
      <Favorite />
      <hr />

      {/* 5) 취미 선택 컴포넌트 제작 */}
      <h2>취미 선택</h2>
      <Hobby />
      <hr />
      
    </>
  );
}

export default App;
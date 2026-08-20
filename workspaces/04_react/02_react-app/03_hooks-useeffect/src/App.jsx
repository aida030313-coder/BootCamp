import Example1 from "./components/Example1"
import Example2 from "./components/Example2"
import Example3 from "./components/Example3"
import Example4 from "./components/Example4"
import Example5 from "./components/Example5"
import Example6 from "./components/Example6"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Example1/> */}
      {/* <Example2/> */}
      <Example3/>
      {/* <Example4/>
      <Example5/>
      <Example6/> */}
    </>
  )
}

export default App


/*
	Hooks는 리액트 16.8에서 새로 도입된 기능으로, 함수 컴포넌트에서 사용 불가능한 생명주기 메소드의 한계점으로 인해
  상태 관리 및 렌더링 이후 시점 컨트롤 등 다양한 문제를 해결하기 위해 만든 함수 집합을 의미합니다.
  그 중 useState는 가장 기본적인 hook이며, 함수 컴포넌트에서도 상태를 관리할 수 있게 합니다.
 
  컴포넌트가 렌더링 된 이후에 특정 작업을 수행할 필요가 있다면 클래스형 컴포넌트에서는
  componentDidMount 혹은 componentDidUpdate 메소드를 이용하면 됩니다.
  하지만, 함수형 컴포넌트에서는 생명주기 API 사용이 불가능합니다.
  그렇기에 함수형 컴포넌트에서도 렌더링 된 이후 시점에 수행 할 내용이 필요한 경우 
  사용할 수 있는 기능을 hooks로 제공하고 있고 useEffect입니다.

  1. React.useEffect()
    1) 함수형 컴포넌트에서 사이드 이펙트(side effect)를 처리하기 위한 훅(Hooks) 입니다.
    2) 사이드 이펙트란?
       데이터 가져오기(API 호출), 구독 설정, DOM 직접 수정, 타이머 설정 등 
       컴포넌트 외부와 상호작용하거나 비동기 로직을 실행하는 작업을 의미합니다.
    
    
  2. React.useEffect() 구문
    1) 형식
      React.useEffect(setup[, dependencies]);
    2) 설명
      (1) setup
        - 사이드 이펙트가 동작할 코드가 작성된 함수입니다.
        - cleanup 코드를 가지고 있는 함수를 반환할 수 있습니다. (선택)
        - setup 함수에서 return한 cleanup 함수는 컴포넌트가 Unmount될 때 실행됩니다. 
      (2) dependencies
        - 의존성 배열입니다. 필수가 아닌 선택 인자입니다.
        - setup 함수에서 사용하는 모든 반응형 값(props, state, 변수, 함수 등)이 포함될 수 있습니다.


  3. 의존성 배열(dependencies)에 따른 사이드 이펙트 실행 시점
    1) 의존성 배열이 없는 경우          
      ▶︎ 컴포넌트가 렌더링될 때마다 실행
    2) 의존성 배열이 빈 배열([])인 경우 
      ▶︎ 컴포넌트가 처음 마운트될 때 한 번만 실행 
    3) 의존성 배열에 특정 값이 있는 경우 
      ▶︎ 해당 값이 변경될 때마다 실행 


  4. 예시
    1) API 호출 (최초 1회)
      useEffect(() => {
        fetchData();
      }, []);
    2) 특정 값(data) 변경 시 동작
      useEffect(() => {
        doSomething(data);
      }, [data]);
    3) 이벤트 리스너 등록 및 해제 (cleanup)
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
*/
import './App.css'
import MainLayout from './layouts/MainLayout'
import { Routes, Route, RouterProvider } from 'react-router-dom'
import Menus from './pages/Menus'
import Home from './pages/Home'
import About from './pages/About'
import MenuDetail from './pages/MenuDetail'
import MenuSearchResult from './pages/MenuSearchResult'
import { router } from './routes/router'

function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>

          <Route path="menus">
            <Route index element={<Menus/>}/>
            <Route path=":id" element={<MenuDetail/>}/>
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes> */}

      <RouterProvider router={router}/>
    </>
  )
}

export default App


/*
  1. createBrowserRouter()
    1) React Router v6.4에서 도입된 새로운 라우터 생성 함수입니다.
    2) 기존 <BrowserRouter>보다 더 많은 기능을 제공하고, 객체 기반의 라우트 구성이 가능합니다.
    3) <RouterProvider>와 함께 사용합니다.
*/
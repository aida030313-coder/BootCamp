import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <main className='content'>
                <Outlet/>
            </main>
            <Footer/>        
        </div>
    )
}

export default MainLayout

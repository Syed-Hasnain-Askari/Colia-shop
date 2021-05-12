import React from 'react'
import Navbar from '../Component/GlobalComponent/header/Navbar' 
import Footer from '../Component/GlobalComponent/footer/Footer' 
import '../Component/layout.css'
export default function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            {/* <Footer/> */}
        </div>
    )
}

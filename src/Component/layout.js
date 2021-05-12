import React from 'react'
import Navbar from '../Component/GlobalComponent/header/Navbar' 
import Footer from '../Component/GlobalComponent/footer/Footer' 
import reducer , { initialState } from './Context/reducer';
import StateProvider from './Context/StateProvider';
import '../Component/layout.css'
export default function Layout({children}) {
    return (
        <StateProvider initialState = { initialState } reducer = {reducer} >
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
        </StateProvider>
    )
}

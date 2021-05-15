import React from 'react'
import {Router} from '@reach/router'
import IndexPage from '../pages/index'
import Contact from '../Component/Contact/contact'
import LaMarque from '../pages/LaMarque'

export default function config() {
    return (
        <Router basepath="/home">
            <IndexPage path="/"/>
            <Contact path="/Contact"></Contact>
            <LaMarque path="/LaMarque"></LaMarque>
        </Router>
    )
}

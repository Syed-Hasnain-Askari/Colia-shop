import React from 'react'
import {Router} from '@reach/router'
import IndexPage from '../pages/index'

export default function config() {
    return (
        <Router basepath="/home">
            <IndexPage path="/"/>
        </Router>
    )
}

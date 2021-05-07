import React from 'react'
import {Link} from 'gatsby'
export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <Link to='/Nouveates'><li>Nouveates</li></Link>
                <Link to='/Shope'><li>Shoe</li></Link>
                <Link to='/LaMarque'><li>La Marque</li></Link>
                <Link to='/Contact'><li>Conact</li></Link>
            </ul>
        </div>
    )
}

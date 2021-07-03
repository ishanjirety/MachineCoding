import React from 'react'
import './Nav.css'
import { Search } from '../../Svg'
export const Nav = () => {
    return (
        <nav className="nav">
            <div className="search-wrapper">
                <input type="text" placeholder="Search" />
                <Search />
            </div>
        </nav>
    )
}


import React from 'react'
import './Navbar.css'

import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import logo from '../../../assets/images/header_images/logoColiaShop.png'
import { useState } from 'react';
import { useEffect } from 'react';
import DropdpwnTypeOne from './DropdpwnTypeOne'
import DropdpwnTypeTwo from './DropdpwnTypeTwo';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {Link} from 'gatsby'
import { useStateValue }from '../../Context/StateProvider'


// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

function Navbar() {

    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 95) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    const [open, setOpen] = useState(false);
    const [showDrop, setShowDrop] = useState(false); 

    return (
        <>
            {
                show ?
                    <div className={`navbar2__wrapper ${show && "nav__scroll"}`}>
                        <div className="leftSec__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
                        <div className="middle__sec"
                            style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}
                        >
                            <div className="mobSearchbar">
                                <input type="text" 
                                    placeholder="search"
                                />
                                <SearchIcon/>
                            </div>
                            <span className="d__btn"
                                onClick={()=> setShowDrop(!showDrop)}
                            >news
                                <div 
                                    style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}
                                >
                                    <DropdpwnTypeOne />
                                </div>
                            </span>

                            <span className="d__btn2">shop
                                <DropdpwnTypeTwo />
                            </span>
                            <span className="d__btn">pre-order
                                <DropdpwnTypeOne 
                                    cName="top"
                                />
                            </span>
                            <Link to="/LaMarque"><span className="contact">La Marque</span></Link>
                            <Link to="/Contact"><span className="contact">MAGASINS</span></Link>
                            <div className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
                        </div>
                        <div className="rightSec__icons">
                            <SearchIcon />
                            <FavoriteBorderIcon />
                            <ShoppingBasketIcon />
                        </div>
                    </div>
                    :
                    <div className="navbar__wrapper">
                        <header className="navbar__header">
                            <div className="left__sec">
                                <span>english</span>
                                <span>login</span>
                                <span>chf</span>
                            </div>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="right__sec">
                                <SearchIcon />
                                <FavoriteBorderIcon />
                                <ShoppingBasketIcon />
                            </div>
                        </header>
                        <nav className="navbar__nav">
                            <span className="d__btn">news
                                <DropdpwnTypeOne />
                            </span>
                            <span className="d__btn2">shop
                                <DropdpwnTypeTwo />
                            </span>
                            <span className="d__btn">pre-order
                                <DropdpwnTypeOne />
                            </span>
                            <Link to="/LaMarque"><span className="contact">La Marque</span></Link>
                            <Link to="/Contact"><span className="contact">stores</span></Link>
                        </nav>
                    </div>
            }
        </>
    )
}

export default Navbar

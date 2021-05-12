import React from "react"
import "./Navbar.css"

import SearchIcon from "@material-ui/icons/Search"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import logo from "../../../assets/images/header_images/logoColiaShop.png"
import { useState } from "react"
import { useEffect } from "react"
import DropdpwnTypeOne from "./DropdpwnTypeOne"
import DropdpwnTypeTwo from "./DropdpwnTypeTwo"

import {Link} from 'gatsby'

function Navbar() {
  const [show, handleShow] = useState(false)
  const transitionNavbar = () => {
    if (window.scrollY > 115) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  return (
    <>
      {show ? (
        <div className={`navbar2__wrapper ${show && "nav__scroll"}`}>
          <div className="leftSec__logo">
            <img src={logo} alt="" />
          </div>
          <div className="middle__sec">
            <span className="d__btn">
              news
              <DropdpwnTypeOne />
            </span>

            <span className="d__btn2">
              shop
              <DropdpwnTypeTwo />
            </span>
            <span className="d__btn">
              pre-order
              <DropdpwnTypeOne />
            </span>
            <Link to="/LaMarque"><span>LA MARQUE</span></Link>
            <Link to="/Contact"><span>MAGASINS</span></Link>
          </div>
          <div className="rightSec__icons">
            <SearchIcon />
            <FavoriteBorderIcon />
            <ShoppingBasketIcon />
          </div>
        </div>
      ) : (
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
            <span className="d__btn">
              news
              <DropdpwnTypeOne />
            </span>
            <span className="d__btn2">
              shop
              <DropdpwnTypeTwo />
            </span>
            <span className="d__btn">
              pre-order
              <DropdpwnTypeOne />
            </span>
            <Link to="/LaMarque"><span>LA MARQUE</span></Link>
            <Link to="/Contact"><span>MAGASINS</span></Link>
          </nav>
          
        </div>
      )}
    </>
  )
}

export default Navbar

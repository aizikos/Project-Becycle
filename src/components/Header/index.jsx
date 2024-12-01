import React from 'react'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";



const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <div className="haeder--logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header--nav">
                    <Link to={'/'}>Trade In</Link>
                    <Link to={'/new-product'}>Велосипеды</Link>
                    <Link to={'/'}>Запчасти</Link>
                    <Link to={'/'}>Экипировка</Link>
                    <Link to={'/'}>Аксессуары</Link>
                    <Link to={'/'}>Велостанки</Link>
                </div>
                <div className="header--icons">
                    <Link to={''}><IoSearch/></Link>
                    <Link to={''}><FaRegUser/></Link>
                    <Link to={''}><FaRegHeart/></Link>
                    <Link to={''}><BsCart3/></Link>
                </div>
                <div className="header--menu">
                    <Link to={''}><BiMenuAltRight/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
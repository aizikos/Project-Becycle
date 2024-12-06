import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Drop from '../../assets/png/bicycle/drop.png'
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";




const Header = () => {
    const [burger, setBurger] = useState(false)
    const [drop, setDrop] = useState(false)
    const [searchInput, setSearchInput] = useState(false)

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="haeder--logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="header--nav">
                        <Link to={'/'}>Trade In</Link>
                        <Link to={'/'}
                            onMouseOver={() => setDrop(true)}
                            onMouseOut={() => setDrop(false)}
                        >
                            Велосипеды
                        </Link>
                        <Link to={'/'}>Запчасти</Link>
                        <Link to={'/'}>Экипировка</Link>
                        <Link to={'/'}>Аксессуары</Link>
                        <Link to={'/'}>Велостанки</Link>
                    </div>
                    <div className="header--icons">
                        <Link to={''} onClick={() => setSearchInput(true)}>
                            <IoSearch />
                        </Link>
                        <Link to={''}><FaRegUser /></Link>
                        <Link to={''}><FaRegHeart /></Link>
                        <Link to={''}><BsCart3 /></Link>
                    </div>
                    <div className="header--menu">
                        <Link to={''} onClick={() => setBurger(true)}>
                            <BiMenuAltRight />
                        </Link>
                    </div>
                    <div className="header--burger"
                        style={{
                            transform: burger ? "translateX(0)" : "translateX(300%)"
                        }}>
                        <h2 onClick={() => setBurger(false)}>
                            <MdClose />
                        </h2>
                        <h1>Доп. Информация</h1>
                        <Link>О нас</Link>
                        <Link>Веломастерская</Link>
                        <Link>Хранение</Link>
                        <Link>Гарантии</Link>
                        <Link>Пользовательское соглашение</Link>
                        <Link>Доставка и оплата</Link>
                        <Link>Блог</Link>
                        <Link>Контакты</Link>
                    </div>
                    {burger ?
                        <div className="header--bg" onClick={() => setBurger(false)}>

                        </div> : null
                    }
                    {drop ? <div onMouseOver={() => setDrop(true)} className="header--dropdown">
                        <a href="#"><IoMdArrowDropup /></a>
                        <div className="header--dropdown__text">
                            <div className="header--dropdown__text--content">
                                <h3>Горные велосипеды</h3>
                                <h3>Городские велосипеды</h3>
                                <h3>Шоссейные велосипеды</h3>
                                <h3>Гравийные велосипеды</h3>
                                <h3>Трековые велосипеды</h3>
                            </div>
                            <div className="header--dropdown__text--content">
                                <h3>Велосипеды для триатлона</h3>
                                <h3>Двухподвесные велосипеды</h3>
                                <h3>Электровелосипеды</h3>
                                <h3>Женские велосипеды</h3>
                                <h3>Детские велосипеды</h3>
                            </div>
                        </div>
                        <img src={Drop} alt="Bike" width={300} />
                    </div> : null}
                    <div className="header--search"
                        style={{ transform: searchInput ? "translateY(0)" : "translateY(200%)" }}
                    >
                        <div className="header--search__content">
                            <input type="text" placeholder='Поиск' />
                            <a href="#"><IoIosSearch /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
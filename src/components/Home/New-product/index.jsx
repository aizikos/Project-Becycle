import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api.jsx'
import country1 from '../../../assets/png/country/italy.png'
import bicycle from '../../../assets/png/bicycle/bicycle1.png'
import { TbClick } from "react-icons/tb";
import { Link } from 'react-router-dom'

const NewProduct = () => {
    const [NewProduct, setNewProduct] = useState([])
    console.log(NewProduct);

    const getNewProduct = async () => {
        const res = await axios(API)
        const { data } = await res
        setNewProduct(data)
    }

    useEffect(() =>{
        getNewProduct()
    },[])

    function click() {
        console.log("helo");

    }

    return (
        <div id='newproduct'>
            <div className="container">
                <h1>Новинки</h1>
                <div className="newproduct">
                    <div className="newproduct--card">
                        <div className="newproduct--card__country">
                            <img src={country1} alt="italy" />
                            <h5> Распродано</h5>
                        </div>
                        <div className="newproduct--card__product">
                            <img src={bicycle} alt="italy bicyle" />
                        </div>
                        <div className="newproduct--card__info">
                            <h4>Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                            <h5>684 840 ₽</h5>
                        </div>
                        <div className="newproduct--card__btn">
                            <button onClick={() => click()}><TbClick className='click' /> В 1 клик</button>
                        </div>
                    </div>
                    <div className="newproduct--card">
                        <div className="newproduct--card__country">
                            <img src={country1} alt="italy" />
                            <h5> Распродано</h5>
                        </div>
                        <div className="newproduct--card__product">
                            <img src={bicycle} alt="italy bicyle" />
                        </div>
                        <div className="newproduct--card__info">
                            <h4>Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                            <h5>684 840 ₽</h5>
                        </div>
                        <div className="newproduct--card__btn">
                            <button onClick={() => click()}><TbClick className='click' /> В 1 клик</button>
                        </div>
                    </div>
                    <div className="newproduct--card">
                        <div className="newproduct--card__country">
                            <img src={country1} alt="italy" />
                            <h5> Распродано</h5>
                        </div>
                        <div className="newproduct--card__product">
                            <img src={bicycle} alt="italy bicyle" />
                        </div>
                        <div className="newproduct--card__info">
                            <h4>Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                            <h5>684 840 ₽</h5>
                        </div>
                        <div className="newproduct--card__btn">
                            <button onClick={() => click()}><TbClick className='click' /> В 1 клик</button>
                        </div>
                    </div>
                </div>
                <div className="all">
                    <Link >показать все</Link>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
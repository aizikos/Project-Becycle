import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api.jsx'
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

    useEffect(() => {
        getNewProduct()
    }, [])

    function click() {
        console.log("helo");

    }

    return (
        <div id='newproduct'>
            <div className="container">
                <h1>Новинки</h1>
                <div className="newproduct">
                    {
                        NewProduct.map(e => (
                            <div  className="newproduct--card">
                                <div className="newproduct--card__country">
                                    <img src={e.country} alt="italy" />
                                    <h5> Распродано</h5>
                                </div>
                                <div className="newproduct--card__product">
                                    <img src={e.img} alt="italy bicyle" />
                                </div>
                                <div className="newproduct--card__info">
                                    <h4>{e.titlle}</h4>
                                    <h5>{e.price}₽</h5>
                                </div>
                                <div className="newproduct--card__btn">
                                    <button onClick={() => click()}><TbClick className='click' /> В 1 клик</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="all">
                    <Link >показать все</Link>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
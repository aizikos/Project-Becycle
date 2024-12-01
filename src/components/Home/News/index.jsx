import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div id='news'>
            <div className="news">
                <div className="news--block">
                    <p>Экстремальное <br /> вождение на горном <br /> велосипеде</p>
                    <Link to={''}>Подробнее</Link>
                </div>
                <div className="news--block">
                    <p>Велосипеды <br /> для профессионалов</p>
                    <Link to={''}>Подробнее</Link>
                </div>
                <div className="news--block">
                    <p>Долгая поездка <br /> на шоссейном велосипеде</p>
                    <Link to={''}>Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

export default News
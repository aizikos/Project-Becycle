import React from 'react'
import News from './News'
import Brand from './Brand'

const Home = () => {
    return (
        <>
            <div id='home'>
                <div className="container">
                    <div className="home">
                        <h1>Электро <br /> велосипеды</h1>
                        <p>Cento10 Hybrid — это гоночный велосипед с помогающим <br /> педалированию электроприводом,
                            который устанавливает новый,<br /> очень высокий стандарт для данной категории
                        </p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
            <News/>
            <Brand/>
        </>
        
    )
}

export default Home
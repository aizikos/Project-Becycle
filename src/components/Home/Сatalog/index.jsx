import React from 'react'
import img1 from '../../../assets/png/catalog/pngwing.png'
import img2 from '../../../assets/png/catalog/pngwing 2.png'

const Catalog = () => {
  return (
    <div id='catalog'>
        <div className="container">
            <div className="catalog">
                <h1>Каталог</h1>
                <div className='catalog-box1'>
                  <h1>Велосипеды</h1>
                  <img src={img1} alt="" />
                </div>
                <div className="catalog--container">
                  <div className="catalog--container__box">
                    <h1>TRADE-IN</h1>
                    <img src={img2} alt="" />
                  </div>
                  <div className="catalog--container__box2">
                    <div className="catalog--container__box2--left"></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catalog
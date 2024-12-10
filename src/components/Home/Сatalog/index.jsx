import React from 'react'
import img1 from '../../../assets/png/catalog/pngwing.png'
import img2 from '../../../assets/png/catalog/pngwing 2.png'
import img3 from '../../../assets/png/catalog/img1.png'
import img4 from '../../../assets/png/catalog/img2.png'
import img5 from '../../../assets/png/catalog/img3.png'
import img6 from '../../../assets/png/catalog/image 39.png'

const Catalog = () => {
  return (
    <div id='catalog'>
      <div className="container">
        <div className="catalog">
          <h1>Каталог</h1>
          <div className='catalog--box1'>
            <h1>Велосипеды</h1>
            <img src={img1} alt="" />
          </div>
          <div className="catalog--container">
            <div className="catalog--container__box">
              <h1>TRADE-IN</h1>
              <img src={img2} alt="" />
            </div>
            <div className="catalog--container__box2">
              <div className="catalog--container__box2--left">
                <div className="catalog--container__box2--left__box1">
                  <h1>Запчасти</h1>
                  <img src={img3} alt="" />
                </div>
                <div className="catalog--container__box2--left__box2">
                  <h1>Аксессуары</h1>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="catalog--container__box2--rigth">
                <div className="catalog--container__box2--rigth__box1">
                  <h1>Экипировка</h1>
                  <img src={img5} alt="" />
                </div>
                <div className="catalog--container__box2--rigth__box2">
                  <h1>Велостанки</h1>
                  <img src={img6} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
import axios from 'axios'
import React, { useState } from 'react'
import {API} from '../../../API/Api.jsx'
const NewProduct = () => {
    const [NewProduct,setNewProduct] = useState([])

    // const getMewProduct = async() => {
    //     const res = await axios(API)
    //     const {data} = await res
    //     setNewProduct(data)
    // }
    console.log(NewProduct);
    

  return (
    <div>
        <div className="container">
            <div className="newproduct">
                <div className="newproduct--card">
                    <div className="newproduct--card__country">
                        <img src="" alt="" />
                        <h5> Распродано</h5>
                    </div>
                    <div className="newproduct--card__product">
                        <img src="" alt="" />
                    </div>
                    <div className="newproduct--card__info">
                        <h3></h3>
                        <h5></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProduct
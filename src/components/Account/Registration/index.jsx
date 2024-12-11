import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div id='registration'>
            <div className="registration">
                <div className="container">
                    <div className="registration--link">
                        <h4>Регистрация</h4>
                        <h5>Войти</h5>
                    </div>
                    <div className="registration--form">
                        <label htmlFor="">Имя пользователя</label>
                        <input type="text" />
                        <label htmlFor="">E-mail</label>
                        <input type="email" />
                        <label htmlFor="">Пароль</label>
                        <input type="text" />
                        <label htmlFor="">Подтвердите пароль</label>
                        <input type="text" />
                    </div>
                    <button>Регистрация</button>
                    <div className="registration--quest">
                        <p>Уже регистрировались?</p>
                        <Link to={'/accaunt'}>Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
import React from 'react'
import { Link } from 'react-router-dom'
const Accaunt = () => {
  return (
    <div id='accaunt'>
      <div className="accaunt">
        <div className="container">
          <div className="accaunt--link">
            <h4>Войти</h4>
            <Link to={'/registration'}>Регистрация</Link>
          </div>
          <div className="accaunt--form">
            <label htmlFor="">Имя пользователя</label>
            <input type="text" />
            <label htmlFor="">Пароль</label>
            <input type="text" />
          </div>
          <button>Войти</button>
          <div className="accaunt--check">
            <div className="accaunt--check__checkbox">
              <input type="checkbox" />
              <label htmlFor="">Запомнить меня</label>
            </div>
            <Link to={'/reset-password'}>Забыли пароль?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accaunt
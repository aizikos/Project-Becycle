import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

const Passport = () => {
    const [notification, setNotification] = useState(false)

    return (
        <div id='passport'>
            <div className="passport">
                <div className="container">
                    <h1>Забыли пароль?</h1>
                    <p>Укажите свой email или имя пользователя. <br />
                        Ссылку на создание нового пароля <br />
                        вы получите по электронной почте.
                    </p>
                    <div className="passport--form">
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                    </div>
                    <Link to={''} onClick={() => setNotification(true)}>Сброс пароля</Link>
                </div>
            </div>
            <div className="passport-notication"
                style={{ transform: notification ? "translateX(0)" : "translateX(200%)" }}>
                <div className="passport-notication--done">
                    <h5 onClick={() => setNotification(false)
                    }>
                        <IoClose />
                    </h5>
                    <h1>Письмо отправлено</h1>
                    <p>Письмо со ссылкой для сброса пароля было<br />
                        направлено на адрес электронной почты,<br />
                        привязанный к вашей учетной записи, <br />
                        доставка сообщения может занять несколько<br />
                        минут. Пожалуйста, подождите не менее 10 <br />
                        минут,прежде чем инициировать ещё один <br />
                        запрос.
                    </p>
                    <Link to={'/accaunt'}>Войти</Link>
                </div>

                <div className="passport-bg">

                </div>
            </div>

        </div>
    )
}

export default Passport
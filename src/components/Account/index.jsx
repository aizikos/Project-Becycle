import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Accaunt = () => {
  const {logIn} = useAuth();
  const navigate = useNavigate()

  const ERROR = () => {
    toast.error('🦄 Неправильно запольнено', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

const succses = () => {
    toast.success('🦄 Добавлено', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

async function handleLogIn() {
    try {
        await logIn(email, pasword)
        navigate('/profile')
    } catch (error) {
        ERROR()
    }
    setEmail('')
    setPasword('')
}
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
          <button onClick={()=>handleLogIn()}>Войти</button>
          <div className="accaunt--check">
            <div className="accaunt--check__checkbox">
              <input type="checkbox" />
              <label htmlFor="">Запомнить меня</label>
            </div>
            <Link to={'/reset-password'}>Забыли пароль?</Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Accaunt
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";



const Registration = () => {

    const { register, signInWithGoogle } = useAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [pasword, setPasword] = useState('');
    const[log,setLog] = useState(true)

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

    async function handleReg() {
        try {
            await register(email, pasword)
            succses()
        } catch (error) {
            ERROR()
        }
        setEmail('')
        setPasword('')
    }

    return (
        <div id='registration'>
            {
                log?<div className="registration">
                <div className="container">
                    <div className="registration--link">
                        <h4 onClick={() => setLog(true)}>Регистрация</h4>
                        <h5 onClick={() => {
                            setLog(false);
                           
                        }}>Войти</h5>
                    </div>
                    <div className="registration--form">
                        <label htmlFor="">E-mail</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <label htmlFor="">Пароль</label>
                        <input type="text" onChange={(e) => setPasword(e.target.value)} value={pasword}/>
                    </div>
                    <button onClick={() => handleReg()}>Регистрация</button>
                    <button onClick={() => {
                        signInWithGoogle();
                        navigate('/')
                    }
                        } className='btn'>Accaunt Google <a href=""><FcGoogle /></a></button>
                    <div className="registration--quest">
                        <p>Уже регистрировались?</p>
                        <Link to={'/accaunt'}>Войти</Link>
                    </div>
                </div>
            </div>: navigate('/accaunt')
            }
            <ToastContainer />
        </div>

    )
}

export default Registration
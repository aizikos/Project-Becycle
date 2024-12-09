import React, { useState } from 'react'
import form from '../../../assets/png/form.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const ERROR = () => {
        toast.error('🦄 Запольните поле!!', {
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

    const postForm = () => {
        if (name === '' || phone === '' || email === '' || company === '' || message === '') {
            ERROR()

        } else {
            const API = 'https://api.elchocrud.pro/api/v1/1e0693e2b78f8d9fd488889fb4aa35a4/admin'
            const NewForm = {
                name: name,
                phone: phone,
                email: email,
                company: company,
                message: message,
            };

            axios.post(API, NewForm)
            succses()
            setName('')
            setPhone('')
            setEmail('')
            setCompany('')
            setMessage('')
            console.log(axios.get(API));

        }
    }

    return (
        <div id='form'>
            <div className="form">
                <div className="form--content">
                    <h1>СВЯЖИТЕСЬ С НАМИ <br />ПО ЛЮБЫМ ВОПРОСАМ</h1>
                    <div className="form--content__info">
                        <div className="form--content__info--input">
                            <input type="text" placeholder='Имя' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                            <input type="text" placeholder='Teлефон' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                        <div className="form--content__info--input">
                            <input type="text" placeholder='E-mail' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="text" placeholder='Компания' name='company' onChange={(e) => setCompany(e.target.value)} value={company} />
                        </div>
                    </div>
                    <div className="form--content__text">
                        <textarea placeholder='Сообщение' name='message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                    </div>
                    <button onClick={() => postForm()}>Задать вопрос</button>
                    
                </div>

            </div>
            <img src={form} alt="Form" />
            <ToastContainer/>
        </div>
        
    )
}

export default Form
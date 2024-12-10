import React, { useState } from 'react'
import form from '../../../assets/png/form.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    // const [name, setName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [company, setCompany] = useState('')
    // const [message, setMessage] = useState('')

    const [formDate, setFormDate] = useState({
        name : '',
        phone: '',
        email: '',
        company: '',
        message: ''
    })

    const handleChange = (e) =>{
        setFormDate({...formDate,[e.target.name]:e.target.value})
    }

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
        if (formDate.name === ''|| formDate.phone=== ''|| formDate.email === ''|| formDate.company=== ''||formDate.message === '') {
            ERROR()

        } else {
            const  my_id = `-1002469461498`
            const token = `7510039689:AAHdd1kZ3BJk5dBKxq5p9if_SCGlVVV0y8s`
            const url_api = `https://api.telegram.org/bot${token}/sendMessage`
            const NewMessange = {
                chat_id : my_id,
                parse_model:'html',
                text:`новый текст:
                name:${formDate.name}
                phone:${formDate.phone}
                email: ${formDate.email}
                company: ${formDate.company}
                text: ${formDate.message}
                `
            }
            axios.post(url_api, NewMessange)
            succses()
            // formDate.name ('')
            // formDate.phone('')
            // formDate.email('')
            // formDate.company('')
            // formDate.message('')
            setFormDate({...formDate,name: '',phone:'', email:'',company:'',message:''})
        }
    }

    return (
        <div id='form'>
            <div className="form">
                <div className="form--content">
                    <h1>СВЯЖИТЕСЬ С НАМИ <br />ПО ЛЮБЫМ ВОПРОСАМ</h1>
                    <div className="form--content__info">
                        <div className="form--content__info--input">
                            <input type="text" placeholder='Имя' name='name' onChange={handleChange} value={formDate.name} />
                            <input type="text" placeholder='Teлефон' name='phone' onChange={handleChange} value={formDate.phone} />
                        </div>
                        <div className="form--content__info--input">
                            <input type="text" placeholder='E-mail' name='email' onChange={handleChange} value={formDate.email} />
                            <input type="text" placeholder='Компания' name='company' onChange={handleChange} value={formDate.company} />
                        </div>
                    </div>
                    <div className="form--content__text">
                        <textarea placeholder='Сообщение' name='message' onChange={handleChange} value={formDate.message}></textarea>
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
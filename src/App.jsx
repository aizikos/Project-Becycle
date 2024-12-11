import React from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Accaunt from './components/Account'
import Registration from './components/Account/Registration'
import Passport from './components/Account/Passport'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/accaunt' element={<Accaunt/>} />
         <Route path='/' element={<Home/>}/>
         <Route path='/registration' element={<Registration/>}/>
         <Route path='/reset-password' element={<Passport/>}/>
      </Routes>
      
    </div>
  )
}

export default App
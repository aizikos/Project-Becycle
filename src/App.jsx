import React from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Accaunt from './components/Account'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/accaunt' element={<Accaunt/>} />
         <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
import React from 'react'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import NewProduct from './components/Home/New-product'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='new-product' element={<NewProduct/>} />
         <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
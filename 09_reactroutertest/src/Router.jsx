import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Page from './components/Page/Page'
import Contact from './components/Contact/Contact'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page" element={<Page/>} />
        <Route path= "/contact" element={<Contact/>} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default Router
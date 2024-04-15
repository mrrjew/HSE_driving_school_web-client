import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Footer from './components/footer'
import Contact from './pages/contact'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Contact/>}/>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

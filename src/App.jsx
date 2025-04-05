import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Produtos } from './components/produtos/Produtos'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Contato } from './components/contato/Contato'
import { Produto } from './components/produto/Produto'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <div className='content'>
      <Routes>
        <Route path="/" element={<Produtos/>} />
        <Route path="contato" element={<Contato/>} />
        <Route path="produto/:id" element={<Produto/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App

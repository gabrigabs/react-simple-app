import React from 'react'
import './Contato.css'
import foto from '../../img/contato.jpg'

export const Contato = () => {
  return (
    <section className='contato anime-left'>
        <img src={foto} alt="maquina de escrever" />
        <div>
          <h1>Entre em contato</h1>
          <ul className='dados-contato'>
            <li>Nome: Gabriel Bezerra</li>
            <li>Email: contato@email.com</li>
            <li>Telefone: (11) 1234-5678</li>
          </ul>
        </div>
    </section>
  )
}

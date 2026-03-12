import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <div className='link-list'>
          <a href="#">Serviços</a>
          <a href="#">Projetos</a>
          <a href="#">Sobre</a>
          <a href="#" className='button-contact'>Contatos</a>
        </div>
      <div><h2 className="logo">Sua logo</h2></div>
    </header>
  )
}

export default Header

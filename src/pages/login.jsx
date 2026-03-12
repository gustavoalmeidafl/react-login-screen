import React from 'react';
import { useState } from 'react';
import "./login.css";
import Header from '../components/header/header';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  




  return (
<>
  <Header />
  <div className="login-page">
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Seja bem-vindo(a)</h1>
            <div className='input-field'><input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/></div>
            <div className='input-field'><input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/></div>
      
        <div className="recall-forget">
           <label>
            <input type="checkbox" />
            Lembre de mim
           </label>
           <a href="#">Esqueceu suas senha?</a>
           </div>
           
           <div><button>Entrar</button></div>
           <div className="signup-link">
            Não possui uma conta? <a href="#">Registrar-se</a>
           </div>
           </form>
        </div>
    </div>
    </>
  )
}

export default Login


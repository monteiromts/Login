import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";

const Login = () => {

  const[ Username, setUsername] = useState("");
  const[ password, setpassword] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + Username + " _ " + password);
  };

  return (
    <div className='container'>
      
    <form  onSubmit={handlesubmit}>

     
        <h1>acesse o sistema</h1>
        <div>
       <input
        type="email" 
        placeholder='E-mail' 
       onChange={(e) => setUsername(e.target.value)}
       />
       <FaUser className='icon' />
       </div>


       <div>
      <input type="password" 
      placeholder='Senha' 
      onChange={(e) => setpassword(e.target.value)}
      />
      <FaLock className='icon' />
      </div>



      <div className='recall-forget'>
    <label type="Checkbox">
      Lembrar de mim
    </label>
    <a href="#">Esqueceu a senha?</a>
      </div>

    <div>
      <p>Não tem uma conta? <a href="#">Registrar</a></p>
    </div>
      <button>Entrar</button>
    </form>
    </div>
  )
}

export default Login

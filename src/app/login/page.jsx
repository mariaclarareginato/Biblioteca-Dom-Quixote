"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post('http://localhost:3001/login', {
        email,
        senha,
      });

      setMensagem(resposta.data.mensagem);

      localStorage.setItem('usuarioAutenticado', JSON.stringify({
        nome: resposta.data.nome
      }));

      router.push('./home');
    } catch (erro) {
      if (erro.response) {
        setMensagem(erro.response.data.mensagem);
      } else {
        setMensagem('Erro ao fazer login.');
      }
    }
  };

  return (
    <div className="l2">
      <div>
        <div className="final-container">
          <h2 className="desenhol">──────♡──────</h2>
        </div>
        <br></br>
        <h1 className="titulol">Faça seu login e explore o melhor da Dom Quixote</h1>
        
        <hr className="linha-divisoria" />

        <form className="form-contato" onSubmit={handleSubmit}>
          <label>
            <i>Email:</i>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            <i>Senha:</i>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </label>

          <button type="submit">Entrar</button>
        </form>
</div>
  </div>

      
  );
}

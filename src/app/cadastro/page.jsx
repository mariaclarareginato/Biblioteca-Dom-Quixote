'use client';

import './Cadastro.css'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/cadastrar', {
        nome,
        email,
        senha,
      });
      alert(res.data.mensagem);
      router.push('/login');
    } catch (err) {
      alert(err.response?.data?.erro || 'Erro ao cadastrar');
    }
  };

  return (
    <div className='formulario'>
    <form className='formulario2' onSubmit={cadastrar}>

      <h2 className='titulo5'>Bem-vindo a Dom-Quixote!</h2>
      <input
      className='nome'
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
      className='email'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className='senha'
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
    </div>
  );
}

"use client";
import './Header.css';
import { useRouter } from 'next/navigation';
import { useBusca } from '../../app/contexts/BuscaContext'; 
import { useEffect, useState } from 'react';



export default function Header() {
  const router = useRouter();
  const { busca, setBusca } = useBusca();

  const [nomeUsuario, setNomeUsuario] = useState('');

useEffect(() => {
  const dadosSalvos = localStorage.getItem('usuarioAutenticado');
  if (dadosSalvos) {
    const usuario = JSON.parse(dadosSalvos);
    setNomeUsuario(usuario.nome);
  }
}, []);


  return (
    
    <header>


          {/* Logo */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="w-100 text-center text-lg-start">
          <a href="./home">
            <img className="logo" src="imgsheader/logo.png" alt="Logo" />
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

           {/* Links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./nossahistoria"><i>Nossa História</i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./livros"><i>Livros</i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./cadastro"><i>Cadastre-se</i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./login"><i>Login</i></a>
              </li>
              <li className="nav-item">
                <button 
                  className="sair nav-link btn btn-link"
                  onClick={() => {
                    localStorage.removeItem('usuarioAutenticado');
                    router.push('./login');
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>

            {/* Barra pesquisa */}

            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Pesquisar livros"
                className="form-control"
                value={busca}
                onChange={(e) => setBusca(e.target.value.toLowerCase())}
                aria-label="Pesquisar livros"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}


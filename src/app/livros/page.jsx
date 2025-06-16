"use client";
import { useState } from 'react';
import './livros.css';
import { useBusca } from '../../app/contexts/BuscaContext';

const Livro = ({ img, title, price, index, quantidade, onAlterarQuantidade }) => (
  <div className="card2">
    <img src={`imgslivros/${img}`} className="card-img-top" alt={title} />
    <div className="card-body">
      <br />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{price}</p>
      <div className="contador">
        <button className="botaoc" onClick={() => onAlterarQuantidade(index, -1)}>-</button>
        <span style={{ margin: '0 20px' }}>{quantidade}</span>
        <button className="botaoc" onClick={() => onAlterarQuantidade(index, 1)}>+</button>
      </div>
      <a href="#" className="btn">Comprar</a>
    </div>
  </div>
);

export default function Livros() {
  const { busca } = useBusca();

  const categorias = [
    {
      nome: "Romance",
      livros: [
        ["livro1.jpg", "É assim que acaba", "R$45,90"],
        ["livro2.jpg", "Melhor do que nos filmes", "R$59,90"],
        ["livro3.jpg", "Orgulho e preconceito", "R$29,90"],
        ["livro4.jpg", "Como eu era antes de você", "R$50,00"],
        ["livro5.jpg", "A culpa é das estrelas", "R$30,50"],
        ["livro6.jpg", "Estilhaça-me", "R$40,50"]
      ]
    },
    {
      nome: "Suspense e Terror",
      livros: [
        ["livro7.jpg", "A empregada", "R$39,90"],
        ["livro8.jpg", "Verity", "R$49,00"],
        ["livro9.jpg", "IT - A coisa", "R$100,50"],
        ["livro10.jpg", "A paciente silenciosa", "R$52,00"],
        ["livro11.jpg", "O vilarejo", "R$37,65"],
        ["livro12.jpg", "Jantar secreto", "R$43,56"]
      ]
    },
    {
      nome: "Ficção e Fantasia",
      livros: [
        ["livro13.jpg", "Percy Jackson e os Olimpianos", "R$45,00"],
        ["livro14.jpg", "Maze Runner - Correr ou Morrer", "R$50,90"],
        ["livro15.jpg", "Duna - Parte 1", "R$69,25"],
        ["livro16.webp", "Harry Potter e a pedra filosofal", "R$42,18"],
        ["livro17.jpg", "Corte de espinhos e rosas", "R$56,43"],
        ["livro18.webp", "Maze Runner - A cura mortal", "R$55,95"]
      ]
    },
    {
      nome: "Mais Vendidos",
      livros: [
        ["livro19.jpg", "Jogos Vorazes - Amanhecer na colheita", "R$69,90"],
        ["livro20.jpg", "A biblioteca da meia noite", "R$40,50"],
        ["livro21.jpg", "A Revolução dos bichos", "R$16,68"],
        ["livro22.jpg", "1984", "R$21,00"],
        ["livro23.jpg", "O lado feio do amor", "R$40,82"],
        ["livro24.jpg", "Antes que o café esfrie", "R$38,43"]
      ]
    },
    {
      nome: "Nacionais",
      livros: [
        ["livro25.jpg", "Ainda estou aqui", "R$48,45"],
        ["livro26.jpg", "Tudo é rio", "R$51,47"],
        ["livro27.jpg", "Dom Casmurro", "R$10,66"],
        ["livro28.jpg", "Fim", "R$24,94"],
        ["livro29.jpg", "A hora da estrela", "R$32,15"],
        ["livro30.jpg", "A morte é um dia que vale a pena viver", "R$36,63"]
      ]
    },
    {
      nome: "Mangás",
      livros: [
        ["livro31.jpg", "One Piece", "R$34,76"],
        ["livro32.jpg", "Hunter X Hunter", "R$43,90"],
        ["livro33.png", "Jujutsu Kaisen", "R$26,90"],
        ["livro34.webp", "Spy X Family", "R$47,00"],
        ["livro35.webp", "Hanako-kun", "R$20,50"],
        ["livro36.jpg", "Haikyu", "R$40,80"]
      ]
    },
    {
      nome: "Biografias",
      livros: [
        ["livro37.jpg", "O diário de Anne Frank", "R$24,50"],
        ["livro38.jpg", "Em busca de mim", "R$43,35"],
        ["livro39.jpg", "Rita Lee: Uma autobiografia", "R$39,70"],
        ["livro40.jpg", "Oprah", "R$67,00"],
        ["livro41.jpg", "Minha História", "R$52,50"],
        ["livro42.jpg", "Amigos, Amores e aquela coisa terrível", "R$38,27"]
      ]
    },
    {
      nome: "Clássicos",
      livros: [
        ["livro43.jpg", "Crime e castigo", "R$64,50"],
        ["livro44.jpg", "Box- Sherlock Holmes", "R$67,35"],
        ["livro45.jpg", "O pequeno príncipe", "R$15,70"],
        ["livro46.jpg", "Alice no país das maravilhas", "R$48,90"],
        ["livro47.jpg", "O cortiço", "R$24,00"],
        ["livro48.jpg", "Drácula", "R$20,00"]
      ]
    },
 
  ];

  const [quantidades, setQuantidades] = useState(Array(50).fill(0));
  const [categoriasVisiveis, setCategoriasVisiveis] = useState(3);

  const alterarQuantidade = (index, delta) => {
    setQuantidades(prev => {
      const novaQuantidade = [...prev];
      novaQuantidade[index] = Math.max(0, novaQuantidade[index] + delta);  
      return novaQuantidade;
    });
  };

  const categoriasFiltradas = categorias
    .filter(({ nome, livros }) => {
      const termo = busca.trim().toLowerCase();
      if (!termo) return true;
      return nome.toLowerCase().includes(termo) ||
        livros.some(([_, titulo]) => titulo.toLowerCase().includes(termo));
    })
    .slice(0, categoriasVisiveis);

  const verMaisGeneros = () => {
    setCategoriasVisiveis(prev => prev + 3);
  };

  return (
    <>
      {categoriasFiltradas.map(({ nome, livros }) => {
        const livrosFiltrados = livros.filter(([_, titulo]) =>
          titulo.toLowerCase().includes(busca.toLowerCase())
        );

        return (
          <div key={nome}>
            <h1 className="genero">{nome}</h1>
            <section className="livros">
              {livrosFiltrados.map(([img, title, price], index) => (
                <Livro
                  key={title}
                  img={img}
                  title={title}
                  price={price}
                  index={index}
                  quantidade={quantidades[index]}
                  onAlterarQuantidade={alterarQuantidade}
                />
              ))}
            </section>
            <div className="btn-container">
              <br />
              <button type="button" className="btn2">Ver Mais</button>
            </div>
          </div>
        );
      })}
      
      {categoriasVisiveis < categorias.length && (
        <div className="btn-container">
          <button type="button" className="btn3" onClick={verMaisGeneros}>
            Ver mais gêneros
          </button>
        </div>
      )}
    </>
  );
}

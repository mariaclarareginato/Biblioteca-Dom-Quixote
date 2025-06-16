"use client";
import './home.css';
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'; 
import { useRouter } from 'next/navigation';

export default function Home() {
 
  useEffect(() => {


    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    return () => {
        swiper.destroy();
    };
}, []);


    return (
        <>

          {/* Carrossel */}

       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="imgshome/banner.PNG" className="d-block w-100" alt="Banner 1" />
    </div>
    <div className="carousel-item">
      <img src="imgshome/banner2.PNG" className="d-block w-100" alt="Banner 2" />
    </div>
    <div className="carousel-item">
      <img src="imgshome/banner3.PNG" className="d-block w-100" alt="Banner 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






 
            {/* Carrossel autores */}

            <div>
  <h1 className="tituloc">Principais Autores</h1>
  <hr className="linha-divisoria" />
</div>
           
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                       
                        <div className="card">
                            <img src="imgshome/colleen_hoover.jpg" alt="Colleen Hoover" />
                        </div>

                        <p>Colleen Hoover</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/stephen_king.jpg" alt="Stephen King" />
                        </div>
                        <p>Stephen King</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/agatha_christie.webp" alt="Agatha Christie" />
                        </div>
                        <p>Agatha Christie</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/clarice_lispector.png" alt="Clarice Lispector" />
                        </div>
                        <p>Clarice Lispector</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/jk_rowling.jpg" alt="J.K. Rowling" />
                        </div>
                        <p>J.K. Rowling</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/machado_de_assis.jpg" alt="Machado de Assis" />
                        </div>
                        <p>Machado de Assis</p>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="imgshome/jane_austen.webp" alt="Jane Austen" />
                        </div>
                        <p>Jane Austen</p>
                    </div>
                </div>
            </div>



            {/* Texto e imagem */}

       
            <div className="textoimg">
  <div className="conteudo-flex">
    <h1 className='texto'>
      BEM-VINDO<br />A<br />DOM QUIXOTE
    </h1>

    <p>
      Descubra a sua nova livraria online favorita! Com preços incríveis, um catálogo diversificado e curadoria especial e mágica, além de oferecemos uma experiência única para todos os apaixonados por leitura.<br /><br />
      Dos best-sellers aos clássicos atemporais, aqui você encontra os livros que ama e outros que ainda vai se apaixonar.<br /><br />
      Qualidade, variedade e ótimos preços, tudo em um só lugar.
    </p>

    <img src="imgshome/iconelivro.png" alt="Ícone de livro" />
  </div>
</div>






 {/* Carrossel gêneros */}

<div>
  <h1 className="tituloc">Gêneros:</h1>
  <hr className="linha-divisoria" />
</div>
           
   

<section className="categorias">
    <button type="button" className="btn">Terror</button>
    <button type="button" className="btn" >Romance</button>
    <button type="button" className="btn" >Biografias</button>
    <button type="button" className="btn" >Suspense</button>
    <button type="button" className="btn" >Clássicos</button>
    <button type="button" className="btn" >Ficção científica</button>
    <button type="button" className="btn" >Fantasia</button>
    <button type="button" className="btn" >Mangás</button>
    </section>
    <br></br><br></br>


        </>
    );
}

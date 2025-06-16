import './nossahist.css';

export default function NossaHistoria() {
    return (
        <>
            {/* Título */}
            <br />
            <div>
                <h1 className='title fade-in'>Nossa História</h1>
            </div>

            {/* Textos e imagens */}
            <div className="nh1">
                <div className="content-wrapper fade-in delay-1">
                    <div className="text-side">
                        <p className="texto">
                            Era uma vez, em uma pequena cidade cheia de charme e literatura, duas amigas inseparáveis:
                            Maria Clara Reginato e Charlotte Guedes de Araújo. Desde a infância, elas compartilhavam uma
                            paixão por livros, passando horas em bibliotecas e livrarias, sonhando em um dia ter o seu
                            próprio espaço dedicado à leitura.
                        </p>

                        <p className="texto">
                            Após anos de amizade e muitos planos discutidos, Maria Clara e Charlotte decidiram transformar
                            seu sonho em realidade.
                        </p>
                    </div>

                    <img
                        src="imgsnossahist/img1.jpg"
                        alt="Maria Clara e Charlotte"
                        className="img-side fade-in delay-2"
                    />
                </div>
            </div>

            <div className="nh2">
                <div className="final-container fade-in delay-3">
                    <p className="texto">
                        E assim, as duas amigas continuaram a sonhar e a escrever novas histórias, não só nas páginas
                        dos livros, mas também nas vidas de todos que passavam pela "Dom Quixote". Juntas, elas provaram
                        que a amizade e a literatura podem transformar o mundo ao nosso redor.
                    </p>

                    <div className="since-box">
                        <h3 className="titulo3 fade-in delay-4">Since 2025</h3>
                    </div>
                </div>

                <h2 className="desenhot fade-in delay-5">⟣──────⟨ ⟡ ⟩──────⟢</h2>
            </div>

            {/* Vídeo */}
            <div className="video-container fade-in delay-6">
                <video autoPlay loop muted className="video-style">
                    <source src="imgsnossahist/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
            </div>
            <br />
        </>
    );
}

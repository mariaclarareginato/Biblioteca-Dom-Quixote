import './Footer2.css'

export default function Footer2() {

    return (
        <>
        
            <footer className='footer2'>  
                <div className="footer-section">
                    <h2><i>Sobre</i></h2>
                    <br></br>
                    <p><a href="./nossahistoria">Sobre Nós</a></p>
                    <p><a href="./contato">Mais Informações</a></p>
                    <p><a href="./termosecondicoes">Termos e condições</a></p>
                    <p><a href="./contato">Contate-nos</a></p>
                    
                </div>

                <div className="footer-section">
                    <h2><i>Minha Conta</i></h2>
                    <br></br>
                    <p><a href="./login">Entrar</a></p>
                    <p><a href="./login">Ver meus Dados</a></p>      
                    <p><a href="./doacoes">Doações</a></p>
                    <p><a href="./contato">Ajuda</a></p>
                </div>

                <div className="section">
                    <h2><i>Instalar Aplicativo</i></h2>
                    <p>Na App Store ou Google Play</p>
                    <br></br>
                    <div className="app-icons">
                        <img src="imgsfooter/app.store.PNG" className="app.icon" alt="App Store" />
                        <br></br><br></br>
                        <img src="imgsfooter/google.play.PNG" className="app.icon" alt="Google Play" />
                    </div>
                </div>
<br></br>
                <div className="iconespagamento">
                    <h3><i>Bancos seguros para pagamento</i></h3>
                    <br></br>
                    <div className="payment-icons">
                        <img className="ipag" src="imgsfooter/visa.PNG" alt="Visa" />
                        <img className="ipag" src="imgsfooter/master.card.PNG" alt="Mastercard" />
                        <img className="ipag" src="imgsfooter/maestro.PNG" alt="Maestro" />
                        <img className="ipag" src="imgsfooter/amex.png" alt="Amex" />
                    </div>
                </div>
            </footer>
        </>
    );
}

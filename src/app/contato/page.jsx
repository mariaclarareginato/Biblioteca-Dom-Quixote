import './contato.css'

export default function Contato(){
    return(
        <>
           {/* Título */}
           <br></br>
        <div>
  <h1 className='title2'>Precisa de ajuda?</h1>
  </div>




           {/* Textos e imagens */}

<div className="c1">
    <div className="content-wrapper">
        <div className="text-side">
            <p className="texto">
            Email: contato@livrariadomquixote.com<br></br><br></br>
        Telefone: (11) 9809-9756<br></br><br></br>
        Endereço: Rua Boa Vista, 825 - Boa Vista, São Caetano do Sul - SP
            </p>
              <br></br>
            <p className="texto">
               CEP:  09572-300

            </p>
        </div>

        <img src="imgscontato/imgmapa.PNG" alt="" className="img-side" />
    </div>
</div>

       {/* Texto e formulário */}

<div className="c2">
    <div className="final-container">
        <p className="texto2">
        Estamos aqui para você!<br></br>
    Para tirar dúvidas, sugerir um livro, compartilhar ideias e opiniões ou apenas bater um papo literário, adoramos ouvir nossos leitores!
Preencha o formulário abaixo ou, se preferir, fale com a gente por e-mail ou telefone.
A Dom Quixote é feita de histórias, e a sua também faz parte da nossa.
        </p>

        <div className="since-box">
            <h3 className="titulo3">Doe e tire qualquer<br></br> dúvida conosco</h3>
        </div>
    </div>

    <h2 className="desenhoc">──────♡──────</h2>


     
     
     <h1 className="tituloc">Quer mandar alguma mensagem para nós?</h1>
     <hr className="linha-divisoria" />
    <form className="form-contato">
        <label>
          <i>Nome:</i>
          <input type="text" name="nome" required />
        </label>

        <label>
         <i>E-mail:</i>
          <input type="email" name="email" required />
        </label>

        <label>
          Mensagem:
          <textarea name="mensagem" rows="5" required />
        </label>

        <button type="submit">Enviar</button>
      </form>
</div>

        </>
    )
}
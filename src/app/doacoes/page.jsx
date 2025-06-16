import './Doacoes.css';

export default function Doacoes() {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Doe para a Livraria Dom Quixote</h1>
  
        <p className="mb-4 text-gray-700">
          A Livraria Dom Quixote acredita no poder da leitura para transformar vidas. Sua doação nos ajuda a manter este projeto vivo, acessível e em constante crescimento.
        </p>
  <br></br>
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📚 Doação de livros</h2>
        <p className="mb-4 text-gray-700">
          Aceitamos doações de livros em bom estado. Eles podem ser usados para formar nosso acervo comunitário ou repassados a leitores em situação de vulnerabilidade.
        </p>
        <br></br>
        <p className="mb-4 text-gray-700">
          <strong>Endereço para envio:</strong><br />
          Rua Boa Vista, 825 – Bairro Boa Vista<br />
          São Paulo – SP, CEP 09572-300
        </p>
  <br></br>
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">💰 Doação financeira</h2>
        <p className="mb-4 text-gray-700">
          Você também pode contribuir com qualquer valor para ajudar nos custos operacionais e projetos sociais da livraria.
        </p>
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          <p className="text-sm text-gray-600 mb-2">Chave PIX (e-mail):</p>
          <p className="text-lg font-mono text-indigo-700">doacoes@domquixote.com.br</p>
        </div>
  
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">❤️ Obrigado!</h2>
        <p className="mb-4 text-gray-700">
          Toda ajuda é muito bem-vinda. Juntos, estamos construindo um mundo com mais livros, histórias e oportunidades.
        </p>
      </div>
    );
  }
  
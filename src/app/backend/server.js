const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simulação de banco de dados na memória
const usuarios = [];

// Rota de cadastro
app.post('/api/cadastrar', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  // Verifica se o email já existe
  const usuarioExistente = usuarios.find(user => user.email === email);
  if (usuarioExistente) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }

  // Cadastra novo usuário
  usuarios.push({ nome, email, senha });
  console.log('Usuário cadastrado:', { nome, email });

  res.json({ mensagem: 'Cadastro realizado com sucesso!' });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Email e senha obrigatórios' });
  }

  const usuario = usuarios.find(user => user.email === email && user.senha === senha);

  if (!usuario) {
    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }

  res.json({ mensagem: 'Login realizado com sucesso', nome: usuario.nome });
});

// Roda o servidor

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

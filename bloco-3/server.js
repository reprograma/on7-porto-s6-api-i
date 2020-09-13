const http = require('http');

const server = http.createServer((req, res) => {

  // definindo conteúdo do header
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello, World! <3</h1>');
    res.end();
});

// localhost é o valor padrão para o segundo argumento
server.listen(8000, 'localhost', () => {
  console.log('Servidor rodando na porta 8000');
});
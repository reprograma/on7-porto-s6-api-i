// ------> Importar http

const http = require('http');

// ------> Criar server com função para criar server

// const serveer = http.createServer((re, res) = > {
//   console.log('Requisição realizada')
// });

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method);
    console.log('Requisição realizada');  

  // definindo conteúdo do header
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello, World! <3</h1>');
    res.end();
});

// ------> Rodar servidor e ver que ele para

// $ node server


// ------> Colocar listen e ver o servidor rodando sempre. ATENÇÃO: localhost é o valor padrão para o segundo argumento

server.listen(3000, 'localhost', () => {
  console.log('Servidor rodando na porta 3000');
});




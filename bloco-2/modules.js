// Importando um arquivo de maneira geral e guardando em uma variável

// const people = require('./people');
// console.log(people);


// Importando um arquivo que possui module.exports

// const data = require('./people');
// console.log(data);
// console.log(data.people, data.ages);


// Importando valores expecíficos descritos no module.exports do arquivo

// const { people, ages } = require('./people');

// console.log(people, ages);


// Importando um objeto já existente: esse é um objeto criado que já existe no Node.js

const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());
//Chamando o Cors para criar conexao com o Front
const cors = require('cors');

//Iniciando o express
const express = require('express');
const server = express();

//Usar o Cors, qualquer server pode acessar minha aplicação
server.use(cors())

server.get('/', (req,res) => {
    console.log('Conectou tudo ok')
    return res.json([
        {name: 'Vinicius'},
        {name: 'André'},
        {name: 'Roberval'},
    ])
})

server.listen('5000')
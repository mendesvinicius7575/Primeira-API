//Chamando o Cors para criar conexao com o Front
const cors = require('cors');

//Chamando Puppeteer
const puppeteer = require('puppeteer')

//Iniciando o express
const express = require('express');
const server = express();

//Usar o Cors, qualquer server pode acessar minha aplicação
server.use(cors())

server.get('/', async (req,res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://countrymeters.info/pt/Brazil');

    const pageContent = await page.evaluate(() => {
        return{
            info: document.querySelector('#cp1').innerHTML
        }
    });

   

    res.send(
            pageContent.info    
    );
    console.log('Conectou tudo ok')
    
})

server.listen('5000')
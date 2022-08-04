const express = require('express');
const puppeteer = require('puppeteer')

const server = express();

server.get('/', async (request, response) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://countrymeters.info/pt/Brazil')

  

    const conteudoPage = await page.evaluate(() => {
        return {
            subtitle: document.querySelector('#cp1').innerHTML
        }
    })
    console.log('pageContent:', conteudoPage)

    await browser.close();

    let num = conteudoPage.subtitle.replace(/ /g,"")


    response.send({
        "A população Brasileira:": Number(num),
        "A População Brasileira Dividia por 2 é": num / 2,
        "Dado puxado em tempo real do Site" : "https://countrymeters.info/pt/Brazil"
    })
});


server.listen(3000, () => {
    console.log(`Subiu com sucesso. Acesse http://localhost:3000`);
})

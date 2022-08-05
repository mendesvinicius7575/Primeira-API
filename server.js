const express = require('express');
const puppeteer = require('puppeteer')

const server = express();

server.get('/', async (request, response) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://countrymeters.info/pt/Brazil')

    const browser2 = await puppeteer.launch();
    const page2 = await browser2.newPage();
    await page2.goto('https://countrymeters.info/pt/Argentina')


  
    //page brasil
    const conteudoPage = await page.evaluate(() => {
        return {
            brasil: document.querySelector('#cp1').innerHTML,
            mortes: document.querySelector('#cp9').innerHTML
        }
    })
    //page argentina
    const conteudoPage2 = await page2.evaluate(() => {
        return {
            arg: document.querySelector('#cp1').innerHTML,
            mortes: document.querySelector('#cp9').innerHTML
        }
    })


    await browser.close();

    //pegando dados para trabalhar
    let numB = conteudoPage.brasil.replace(/ /g,"")
    let numMortes = conteudoPage.mortes.replace(/ /g,"")
    let numArg = conteudoPage2.arg.replace(/ /g,"")
    let numMortesArg = conteudoPage2.mortes.replace(/ /g,"")

    //Criei um objeto
    const obj = [{
        "A população Brasileira:": Number(numB),
        "A População Brasileira Dividia por 2 é": numB / 2,
        "Pessoas morreram hoje:": Number(numMortes),
        "Dados puxado do Site" : "https://countrymeters.info/pt/Brazil"},
        {"A população Argentina:": Number(numArg),
        "A População Argentina Dividia por 2 é": numB / 2,
        "Pessoas morreram hoje:": Number(numMortesArg),
        "Dados puxado do Site" : "https://countrymeters.info/pt/Argentina"
        }
    ]

    let data = JSON.stringify(obj)
    

    response.send(
        obj
        
        )
});


server.listen(3000, () => {
    console.log(`Subiu com sucesso. Acesse http://localhost:3000`);
})

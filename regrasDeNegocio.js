let bt = document.querySelector('#btn')
let apaga = document.querySelector('#apaga')

let saida = ''
let checagem = true;


async function pegaConteudo(){
    try {
        const resposta = await fetch('http://localhost:5000/')
        const dados = await resposta
        mostra(dados)
        alert(JSON.stringify(dados))
    } catch (error) {
        console.log(error)
    }
}   


function mostra(infos){  
    saida = infos
    document.querySelector('#lista').innerHTML = saida
}


bt.addEventListener('click', function(e){
    if(checagem != false){
        pegaConteudo();
        e.preventDefault()
        checagem = false;
    }else{
        alert('Limpe os dados antes')
    }
})

apaga.addEventListener('click', function(e){
    saida = ''
    document.querySelector('#lista').innerHTML = ''
    e.preventDefault()
    checagem = true;

})


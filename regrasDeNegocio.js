




async function pegaConteudo(){
    try {
        const resposta = await fetch('http://localhost:5000/')
        const dados = await resposta.json()
        mostra(dados)
    } catch (error) {
        console.log(error)
    }
    
}   

pegaConteudo()

function mostra(infos){

    let saida = ''
    for(let info of infos){
        saida += `<li>Nomes: ${info.name}</li>`
    }

    document.querySelector('#lista').innerHTML = saida


}
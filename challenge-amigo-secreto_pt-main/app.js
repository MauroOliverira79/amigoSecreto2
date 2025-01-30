//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo').value.toUpperCase().trim(); //Busca valor do input o trim é para eliminar espaços vazios
    if(amigos.includes(nomeInput)){
        alert('Nome repetido');
    }
    else if(nomeInput == '' ){
        alert('Nome vazio, gentileza adicionar um nome válido');
    }
    else{
        amigos.push(nomeInput); //adiciona input à lista
        document.querySelector('.name-list').innerHTML = `<p id="listaAmigos">${amigos}</p>`;//adiciona a lista no front no campo Amigos incluídos
        console.log( amigos)
    }
    document.getElementById('amigo').value = '';//limpa o campo input
}

function sortearAmigo(){

    if(amigos.length <= 3){
        alert('Adicione mais participantes no sorteio  esta pouco !!!');
    }
    else{
        let nomesFront = document.querySelector('.result-list');
        let amigosEmbaralhados = amigos.sort(() => Math.random() * amigos.length);
    
        for (let i = 0; i < (amigosEmbaralhados.length); i++){
            if((amigosEmbaralhados.length -1) == i){
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="resultado">${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[0]}</p>`;
            }
            else{
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="resultado">${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[i+1]}</p>`;
            }
       
        }
    }
}

function reiniciar(){
    amigos = []
    document.querySelector('.result-list').textContent = '';
    document.querySelector('.name-list').innerHTML = `<p id="listaAmigos"></p>`;
}
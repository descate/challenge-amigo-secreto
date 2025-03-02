let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo){
        amigos.push(amigo);
        document.getElementById("amigo").value = '';
        actualizarAmigo();
    }else{
        alert("Por favor, ingresa un nombre válido");
    }
}

function actualizarAmigo(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    if (amigos.length > 0){
        const indice = Math.floor(Math.random()*amigos.length);
        const amigoSorteado = amigos[indice];
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }else{
        resultado.innerHTML = "No hay amigos disponibles para sortear";
    }
}
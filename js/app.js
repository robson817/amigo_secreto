let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // Minha solução
    // if (amigos.includes(amigo.value)) {
    //     alert('Esse amigo já está incluído!');
    // } else if (amigo.value == '') {
    //     alert('Por favor, insira um amigo!');
    // } else {
    //     amigos.push(amigo.value);
    //     if (lista.textContent == '') {
    //         lista.textContent = amigo.value;
    //     } else {
    //         lista.textContent = lista.textContent + ', ' + amigo.value;
    //     }
    //     amigo.value = '';
    // }

    if (amigo.value == '') {
        alert('Por favor, insira um amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Esse amigo já está incluído!');
        return;
    }
    
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}



function sortear() {
    if (amigos.length <= 2) {
        alert('Por favor, insira um número de participantes igual ou maior que 3.')
    } else {
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
            }
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

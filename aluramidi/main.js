const listaTeclas = document.querySelectorAll('.tecla');

function tocarSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado');
    }
}


for(let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const som = tecla.classList[1]; 

    const idAudio = `#som_${som}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador ++;
}
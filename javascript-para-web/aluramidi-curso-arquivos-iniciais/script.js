function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const ListadeTeclas = document.querySelectorAll('.tecla');

ListadeTeclas[0].onclick = tocaSomPom;
const visorTelefone = document.querySelector('input[type=tel]')
const numeroTecla = document.querySelectorAll('input[type=button]');


for (contador = 0; contador < numeroTecla.length;contador++){

    const tecla = numeroTecla[contador];

    tecla.onclick = function(){
        visorTelefone.value =  visorTelefone.value + tecla.value;
    }

    tecla.onmousedown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onmouseup = function(){
        tecla.classList.remove('ativa');
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

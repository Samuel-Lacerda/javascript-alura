const visorTelefone = document.querySelector('input[type=tel]')
const numeroTecla = document.querySelectorAll('input[type=button]');


for (contador = 0; contador < numeroTecla.length;contador++){

    const tecla = numeroTecla[contador];

    tecla.onclick = function(){
        visorTelefone.value =  visorTelefone.value + tecla.value;
    }
}

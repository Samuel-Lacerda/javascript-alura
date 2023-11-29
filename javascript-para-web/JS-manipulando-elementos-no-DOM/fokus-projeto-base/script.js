const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const imgBanner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const somPausa = new Audio('sons/pause.mp3');
const somIniciar = new Audio('sons/play.wav');
const somFinalizar = new Audio('sons/beep.mp3');
const musica = new Audio('sons/luna-rise-part-one.mp3'); 
musica.loop = true;
musica.volume = 0.2;
const botaoStartPause = document.querySelector('#start-pause');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
const tempoNaTela = document.getElementById('timer');

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause()
    }
})

focoBtn.addEventListener('click',() =>{
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBtn.classList.add('active');
})

curtoBtn.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
})

longoBtn.addEventListener('click',()=>{
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
})


function alterarContexto(contexto){

    mostrarTempo();
    
    botoes.forEach(contexto => {
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto',contexto);
    imgBanner.setAttribute('src',`imagens/${contexto}.png`);
    switch (contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
            
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.,<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
    default:
        break;
    }
}

const contagemRegressiva = () =>{
    if (tempoDecorridoEmSegundos <= 0) {
        //somFinalizar.play()
        mostrarTempo();
        botaoStartPause.innerHTML = `
        <img class="app__card-primary-butto-icon" src="imagens/play_arrow.png" alt=""><span>Começar</span>`;
        zerar()
        tempoDecorridoEmSegundos = 1500;
        return;
    }

    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

botaoStartPause.addEventListener('click',iniciarPausar);

function iniciarPausar(){
    if (intervaloId) {
        zerar();
        somPausa.play();
        botaoStartPause.innerHTML = `
        <img class="app__card-primary-butto-icon" src="imagens/play_arrow.png" alt=""><span>Começar</span>`;
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    botaoStartPause.innerHTML = `
    <img class="app__card-primary-butto-icon" src="imagens/pause.png" alt=""><span>Pausar</span>`;
    somIniciar.play();
}

function zerar(){
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo(){
    const tempo = new Date (tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
    
}

mostrarTempo();
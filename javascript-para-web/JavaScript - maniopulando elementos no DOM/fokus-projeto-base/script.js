const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const imgBanner = document.querySelector('.app__image');



focoBtn.addEventListener('click',() =>{
    focoBtn.classList.add('active');
    curtoBtn.classList.remove('active');
    longoBtn.classList.remove('active');
    alterarContexto('foco');
})

curtoBtn.addEventListener('click', () =>{
    focoBtn.classList.remove('active');
    curtoBtn.classList.add('active');
    longoBtn.classList.remove('active');
    alterarContexto('descanso-curto');
})

longoBtn.addEventListener('click',()=>{
    focoBtn.classList.remove('active');
    curtoBtn.classList.remove('active');
    longoBtn.classList.add('active');
    alterarContexto('descanso-longo');
})


function alterarContexto(contexto){
    html.setAttribute('data-contexto',contexto);
    imgBanner.setAttribute('src',`imagens/${contexto}.png`);
}
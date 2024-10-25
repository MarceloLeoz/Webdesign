const imagem = document.querySelector('img');
const titulo = document.querySelector('h1');
const paragrafo = document.querySelector('p');
const audio = document.getElementById('meuAudio');
const btnTrocarImagem = document.getElementById('btnTrocarImagem');
const btnTrocarTitulo = document.getElementById('btnTrocarTitulo');
const btnTrocarCor = document.getElementById('btnTrocarCor');
const btnTocarAudio = document.getElementById('btnTocarAudio');
const btnToggle = document.getElementById('btnToggle');
const botoes = document.querySelectorAll('button');

// Arrays com as opções
const imagens = ['img/lion.jpeg', 'img/images.jpeg'];
const titulos = ['Título 1', 'Título 2'];
const cores = ['blue', 'red'];

let indiceImagem = 0;
let indiceTitulo = 0;
let indiceCor = 0;

btnTrocarImagem.addEventListener('click', () => {
    indiceImagem = (indiceImagem + 1) % imagens.length;
    imagem.src = imagens[indiceImagem];
});

btnTrocarTitulo.addEventListener('click', () => {
    indiceTitulo = (indiceTitulo + 1) % titulos.length;
    titulo.textContent = titulos[indiceTitulo];
});

btnTrocarCor.addEventListener('click', () => {
    indiceCor = (indiceCor + 1) % cores.length;
    paragrafo.style.color = cores[indiceCor];
});

btnTocarAudio.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

btnToggle.addEventListener('click', () => {
    botoes.forEach(botao => {
        botao.classList.toggle('botaoAtivo');
    });
});
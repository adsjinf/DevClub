/* 
conseito de variaveis

função é um pedacinho de programa
e só é executado quando for chamada
*/

let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");

// Liga som
botaoSom.addEventListener('click', ligaSom);

function ligaSom(){
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}

// Mostrar o Modal

botao.addEventListener('click', mostraModal);
modal.addEventListener('click', esconderModal);

function mostraModal(){
    modal.style.display = "block";
}

function esconderModal(){
    modal.style.display = "none";
}

window.onload = function() {
    playSound();
}

function playSound() {
    const audio = new Audio('audio/tudum-netflix-sound.mp3');
}
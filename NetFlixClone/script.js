/* 
conseito de variaveis

função é um pedacinho de programa
e só é executado quando for chamada
*/

let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");
let botaoAssitir = document.querySelector(".link-assistir");

// Liga som
botaoSom.addEventListener('click', ligaSom);

function ligaSom(){
    video.muted = !video.muted
/*    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
*/
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

// Tocar o som na abertura
// window -> Site / HTML - document

window.addEventListener("click", tocarAudio)
//window.addEventListener("load", tocarAudio)

function tocarAudio(){
    audio.play();
}

botaoAssitir.addEventListener('click', tocarAudio)

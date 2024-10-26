import { config } from './config.js';

const key = config.API_KEY;

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".tempo-cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${key}&units=metric&lang=pt_br`).then(resposta => resposta.json());

  colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade)
}
import { config } from "./config.js";

const key = config.API_KEY;

function colocarDadosNaTela(dados) {
  document.querySelector(".tempo-cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${key}&units=metric&lang=pt_br`);
    
    if (!resposta.ok) {
        // Lança um erro se a cidade não for encontrada (exemplo: código 404)
        throw new Error("Cidade não encontrada");
    }

    const dados = await resposta.json();
    colocarDadosNaTela(dados);

} catch (error) {
    // Exibe o alerta se houver erro (por exemplo, cidade não encontrada)
    alert("Cidade informada não foi encontrada! Por favor, verifique o nome e tente novamente.");
}
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}

// Adiciona o EventListener no botão
document.querySelector(".botao-buscar").addEventListener("click", cliqueiNoBotao);
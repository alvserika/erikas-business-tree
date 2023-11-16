import { Botoes } from "./components/Botoes.js";
import { botoes } from "./data/data.js";
export { Botoes }


const botoesContainer = document.querySelector('.links');

botoes.forEach((botao) => {
    botoesContainer.innerHTML += Botoes(botao);
});

function toggleMode() {
    const html = document.documentElement;
    const switchElement = document.getElementById('switch');
    const button = document.getElementById('idbutton');
  
    // Verifica se a classe 'dark' está presente
    const isDarkMode = html.classList.contains('dark');
  
    // Adiciona ou remove a classe 'dark' no HTML
    html.classList.toggle('dark');
  
    // Adiciona a lógica de deslizamento diretamente no botão
    if (isDarkMode) {
      button.style.left = '0'; // Posição inicial (esquerda)
    } else {
      button.style.left = '50%'; // Nova posição (direita)
    }
  }
  
  const switchElement = document.getElementById('switch');
  switchElement.addEventListener('click', toggleMode);



import { Botoes } from "./components/Botoes.js";
import { botoes } from "./data/data.js";
export { Botoes }


const botoesContainer = document.querySelector('.links');

botoes.forEach((botao) => {
    botoesContainer.innerHTML += Botoes(botao);
});

// Função para alternar o modo
export function toggleMode() {
    // Adicione ou remova a classe "dark" no elemento HTML
    const html = document.documentElement;
    html.classList.toggle("dark");
}

// Adicione o evento de clique ao elemento com o ID 'switch'
const switchElement = document.getElementById('switch');
switchElement.addEventListener('click', toggleMode);





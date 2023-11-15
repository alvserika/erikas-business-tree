import { Botoes } from "./components/Botoes.js";
import { botoes } from "./data/data.js";
export { Botoes }


const botoesContainer = document.querySelector('.links');

botoes.forEach((botao) => {
    botoesContainer.innerHTML += Botoes(botao);
});

export function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("dark")
}






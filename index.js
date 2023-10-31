import { Botoes } from "./components/Botoes.js";
import { botoes } from "./data/data.js";
export { Botoes }

const botoes = document.querySelector('.links')
Botoes.map((botao)=> {
    botoes.innerHTML += Botoes(botao)

})





// Importa as bibliotecas necessárias
import React from "react";
import ReactDOM from "react-dom";

// Cria o componente principal
const App = () => {
  return (
    <div>
      <h1>Meu Webapp</h1>
      <p>Este é o meu webapp, hospedado no GitHub.</p>
      <div class="produto">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zoom.com.br%2Fcelular%2Fsmartphone-apple-iphone-12-pro-max-128gb-ios&psig=AOvVaw1rrC6dzGABb2EiLu64BNb0&ust=1700157619642000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDsz-rKxoIDFQAAAAAdAAAAABAE" alt="iPhone 13 Pro"/>
      </div>
      <button class="botao">Pagar</button>
    </div>
  );
};

// Renderiza o componente no DOM
ReactDOM.render(<App />, document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useState } from "react";
const { useState, useRef } = React;

function App() {
  const numeroSecreto = useRef(Math.floor(Math.random() * 100));
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tentativas, setTentativas] = useState(0);

  const verificarPalpite = () => {
    const numero = parseInt(palpite, 10);

    if (isNaN(numero) || numero < 0 || numero > 99) {
      setMensagem('Por favor, insira um número entre 0 e 99.');
      return;
    }

    setTentativas((t) => t + 1);

    if (numero < numeroSecreto.current) {
      setMensagem('Muito baixo!');
    } else if (numero > numeroSecreto.current) {
      setMensagem('Muito alto!');
    } else {
      setMensagem(`Você acertou em ${tentativas + 1} tentativas.`);
    }
  };


  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Adivinhação</h1>
      <p>Digite um número entre 0 e 99:</p>
      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={verificarPalpite}>Clique aqui</button>
      </div>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{mensagem}</p>
    </div>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

const { useState, useEffect, useRef } = React;

function App() {
  const [segundos, setSegundos] = useState(0);  ////useState cria o estado!!!
  const [ativo, setAtivo] = useState(false);
  const intervalo = useRef(null);

  const iniciar = () => {
    if (!ativo) {
      setAtivo(true);
    }
  };

  const pausar = () => {
    setAtivo(false);
  };

  const zerar = () => {
    setAtivo(false);
    setSegundos(0);
  };

  useEffect(() => {
    if (ativo) {
      intervalo.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo.current);
    }

    return () => clearInterval(intervalo.current);
  }, [ativo]);

  //HH:MM:SS
  const formatarTempo = (seg) => {
    const h = String(Math.floor(seg / 3600)).padStart(2, '0');
    const m = String(Math.floor((seg % 3600) / 60)).padStart(2, '0');
    const s = String(seg % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'Cronômetro'),
      React.createElement('h2', null, formatarTempo(segundos)),
      React.createElement('div', null,
        React.createElement('button', { onClick: iniciar }, 'Iniciar'),
        React.createElement('button', { onClick: pausar }, 'Pausar'),
        React.createElement('button', { onClick: zerar }, 'Zerar')
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

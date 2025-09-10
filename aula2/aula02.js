// import React from "https://esm.sh/react";
// import ReactDOM from "https://esm.sh/react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: 0,
      operador: null,
      digitandoPrimeiro: true
    };
  }


  
  adicionarNumero(valor) {
    if (this.state.digitandoPrimeiro) {
      this.setState({ numero1: this.state.numero1 + valor });
    } else {
      this.setState({ numero2: this.state.numero2 + valor });
    }
  }

  selecionarOperador(operador) {
    this.setState({ operador: operador, digitandoPrimeiro: false });
  }

  calcularResultado() {
    const n1 = parseFloat(this.state.numero1);
    const n2 = parseFloat(this.state.numero2);
    let resultado = 0;

    if (this.state.operador === '+') {
      resultado = n1 + n2;
    } else if (this.state.operador === '-') {
      resultado = n1 - n2;
    } else if (this.state.operador === '*') {
      resultado = n1 * n2;
    } else if (this.state.operador === '/') {
      resultado = n1 / n2;
    }

    this.setState({
      resultado: resultado.toFixed(2),
      numero1: '',
      numero2: '',
      operador: null,
      digitandoPrimeiro: true
    });
  }

  limpar() {
    this.setState({
      numero1: '',
      numero2: '',
      resultado: 0,
      operador: null,
      digitandoPrimeiro: true
    });
  }

  render() {
  const { numero1, numero2, operador, digitandoPrimeiro, resultado } = this.state;

  // Montar a expressão que será mostrada no visor
  const expressao =
    digitandoPrimeiro
      ? numero1
      : `${numero1} ${operador || ''} ${numero2}`;

  return (
    <div>
      <h1>Calculadora</h1>

      {/* VISOR DA EXPRESSÃO */}
      <div
        style={{
          height: '20px',
          width: '250px',
          marginBottom: '10px',
          padding: '10px',
          fontSize: '20px',
          backgroundColor: '#eee',
          textAlign: 'left',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      >
        {expressao || '0'}
      </div>

      {/* BOTÕES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 60px)',
          gap: '10px',
          marginBottom: '20px'
        }}
      >
        <button onClick={() => this.adicionarNumero('7')}>7</button>
        <button onClick={() => this.adicionarNumero('8')}>8</button>
        <button onClick={() => this.adicionarNumero('9')}>9</button>
        <button onClick={() => this.selecionarOperador('*')}>*</button>

        <button onClick={() => this.adicionarNumero('4')}>4</button>
        <button onClick={() => this.adicionarNumero('5')}>5</button>
        <button onClick={() => this.adicionarNumero('6')}>6</button>
        <button onClick={() => this.selecionarOperador('/')}>/</button>

        <button onClick={() => this.adicionarNumero('1')}>1</button>
        <button onClick={() => this.adicionarNumero('2')}>2</button>
        <button onClick={() => this.adicionarNumero('3')}>3</button>
        <button onClick={() => this.selecionarOperador('-')}>-</button>

        <button onClick={() => this.limpar()}>C</button>
        <button onClick={() => this.adicionarNumero('0')}>0</button>
        <button onClick={() => this.calcularResultado()}>=</button>
        <button onClick={() => this.selecionarOperador('+')}>+</button>
      </div>

      {/* RESULTADO FINAL */}
      <h3>Resultado: {resultado}</h3>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

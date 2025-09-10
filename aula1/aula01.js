
function App() {
  return (
    <div
      style={{
        backgroundColor: "#dcdcdc", // cinza claro do fundo
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        fontFamily: "SansSerif, Arial, Helvetica"
      }}
    >
      {/* Cabeçalho principal */}
      <div
        style={{
          backgroundColor: "#f5f5dc", // bege
          padding: "10px 0",
          textAlign: "center",
          fontSize: "20pt",
          fontWeight: "bold",
          color: "green",
          border: "2px solid black"
        }}
      >
        APRENDENDO REACT PARA DESENVOLVIMENTO WEB
      </div>

      {/* Barra de navegação */}
      <nav
        style={{
          backgroundColor: "#1E3A8A",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          fontWeight: "bold",
          fontSize: "14pt"
        }}
      >
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          HOME
        </a>
        <a href="#livros" style={{ color: "white", textDecoration: "none" }}>
          LIVROS
        </a>
        <a href="#video" style={{ color: "white", textDecoration: "none" }}>
          VÍDEO
        </a>
        <a href="#contato" style={{ color: "white", textDecoration: "none" }}>
          CONTATO
        </a>
      </nav>

      {/* Introdução */}
      <header>
        <h1
          style={{
            fontSize: "22pt",
            color: "black",
            margin: "20px 0",
            textAlign: "center"
          }}
        >
          Introdução
        </h1>
      </header>
      <section>
        <p
          style={{
            fontSize: "14pt",
            lineHeight: "1.6",
            textAlign: "center",
            marginBottom: "15px"
          }}
        >
          Com o React, você cria interfaces organizadas em componentes
          reutilizáveis, que controlam tanto a exibição quanto o comportamento
          da aplicação. Ele permite atualizar elementos de forma dinâmica, sem
          recarregar a página inteira, além de facilitar a aplicação de estilos,
          animações e recursos interativos de maneira escalável.
        </p>
        <p
          style={{
            fontSize: "14pt",
            lineHeight: "1.6",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          O React é uma das bibliotecas mais populares do ecossistema JavaScript
          e tornou-se referência no desenvolvimento de interfaces modernas. Sua
          principal força está na criação de componentes reutilizáveis, que
          tornam o código mais organizado e facilitam a construção de aplicações
          escaláveis e de fácil manutenção.
        </p>
      </section>

      {/* Seção de livros */}
      <h2
        id="livros"
        style={{
            fontSize: "16pt",
            lineHeight: "1.6",
            textAlign: "center",
            marginBottom: "15px"
        }}
      >
        Livros
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px"
        }}
      >
        <img
          src="https://m.media-amazon.com/images/I/A1O2e-E1WkL._SL1500_.jpg"
          alt="Livro 1"
          style={{ width: "150px", height: "200px", border: "1px solid black" }}
        />
        <img
          src="https://m.media-amazon.com/images/I/619aV5TbMdL._SL1412_.jpg"
          alt="Livro 2"
          style={{ width: "150px", height: "200px", border: "1px solid black" }}
        />
        <img
          src="https://m.media-amazon.com/images/I/51yryWz43hL._SY445_SX342_.jpg"
          alt="Livro 3"
          style={{ width: "150px", height: "200px", border: "1px solid black" }}
        />
      </div>

      {/* Aprenda React */}
      <h2
        id="video"
        style={{
           fontSize: "16pt",
           lineHeight: "1.6",
           textAlign: "center",
           marginBottom: "15px"
        }}
      >
        Aprenda REACT na FEI
      </h2>

      {/* Vídeo */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4MHAOPxcnsQ"
          title="React Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "2px solid black" }}
        ></iframe>
      </div>

      {/* Mapa */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8412628015087!2d-46.58479892474326!3d-23.50148805978498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d0b27f2cf5f%3A0x498b8ff1cd58b1f2!2sCentro%20Universit%C3%A1rio%20FEI!5e0!3m2!1spt-BR!2sbr!4v1694974577445!5m2!1spt-BR!2sbr"
          width="560"
          height="300"
          style={{ border: "2px solid black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa FEI"
        ></iframe>
      </div>

      {/* Contatos */}
      <h2
        id="contato"
        style={{
          justifyContent: "center",
          fontSize: "20pt",
          color: "black",
          marginBottom: "10px"
        }}
      >
        Contatos
      </h2>
      <div
        style={{
          border: "2px solid red",
          padding: "10px",
          display: "inline-block",
          marginBottom: "30px",
          justifyContent: "center",
          backgroundColor: "#fff"
        }}
      >
        <p style={{ margin: "5px 0" }}>📧 Email: contato@fei.edu.br</p>
        <p style={{ margin: "5px 0" }}>📞 Telefone: (11) 4353-2900</p>
        <p style={{ margin: "5px 0" }}>
          📍 Endereço: Av. Humberto de Alencar Castelo Branco, 3972
        </p>
      </div>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: "#ffff99",
          padding: "10px",
          textAlign: "center",
          fontSize: "12pt",
          fontWeight: "bold",
          position: "relative",
          border: "1px solid black"
        }}
      >
        <p style={{ margin: "5px" }}>
          Desejamos um excelente semestre a todos!
        </p>
        <p></p>
        <p></p>
        <p></p>
        <p style={{ margin: "5px" }}>
          
        </p>
        {/* Ícones HTML5 e CSS3 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px"
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            style={{ width: "50px" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            style={{ width: "50px" }}
          />
        </div>
      </footer>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

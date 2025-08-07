import '../estilos/Cabecalho.css'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="logo-container">
          <img 
            src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" 
            alt="Logo SENAI" 
            className="logo-senai"
          />
        </div>
        <nav className="navegacao">
          <ul className="menu">
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' }); }}>Início</a></li>
            <li><a href="#sobre" onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}>Sobre</a></li>
            <li><a href="#instalacoes" onClick={(e) => { e.preventDefault(); document.querySelector('.secao-carrossel')?.scrollIntoView({ behavior: 'smooth' }); }}>Instalações</a></li>
            <li><a href="#contato" onClick={(e) => { e.preventDefault(); alert('Em breve!'); }}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
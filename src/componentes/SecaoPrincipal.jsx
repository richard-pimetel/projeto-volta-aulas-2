import '../estilos/SecaoPrincipal.css'

function SecaoPrincipal() {
  return (
    <section id="inicio" className="secao-principal">
      <div className="container">
        <div className="conteudo-hero">
          <h1 className="titulo-principal">
            Bem-vindos de volta ao 
            <span className="destaque"> SENAI</span>
          </h1>
          <p className="subtitulo">
            Novo semestre, novas oportunidades de aprendizado e crescimento profissional
          </p>
          <div className="info-semestre">
            <div className="card-info">
              <h3>Volta às Aulas</h3>
              <p>Prepare-se para mais um semestre de conhecimento técnico e inovação</p>
            </div>
            <div className="card-info">
              <h3>Novas Tecnologias</h3>
              <p>Laboratórios modernos e equipamentos de última geração aguardam você</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecaoPrincipal
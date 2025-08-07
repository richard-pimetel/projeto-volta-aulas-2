import { useState, useEffect } from 'react'
import '../estilos/Carrossel.css'

function Carrossel({ fotos }) {
  const [indiceAtual, setIndiceAtual] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || fotos.length <= 1) return

    const intervalo = setInterval(() => {
      setIndiceAtual(prev => (prev + 1) % fotos.length)
    }, 4000)

    return () => clearInterval(intervalo)
  }, [fotos.length, autoPlay])

  const irParaSlide = (indice) => {
    setIndiceAtual(indice)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const slideAnterior = () => {
    setIndiceAtual(prev => prev === 0 ? fotos.length - 1 : prev - 1)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const proximoSlide = () => {
    setIndiceAtual(prev => (prev + 1) % fotos.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  if (!fotos || fotos.length === 0) {
    return null
  }

  return (
    <div className="carrossel">
      <div className="carrossel-container">
        <button 
          className="botao-carrossel anterior"
          onClick={slideAnterior}
          aria-label="Slide anterior"
        >
          &#8249;
        </button>

        <div 
          className="slides-wrapper"
          style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
        >
          {fotos.map((foto, indice) => (
            <div
              key={foto.id}
              className="slide"
            >
              <img
                src={foto.url}
                alt={foto.title}
                className="imagem-slide"
              />
              <div className="info-slide">
                <h3 className="titulo-foto">{foto.title}</h3>
                <div className="detalhes-foto">
                  <span className="visualizacoes">{foto.views} visualizações</span>
                  <span className="data">{foto.data}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="botao-carrossel proximo"
          onClick={proximoSlide}
          aria-label="Próximo slide"
        >
          &#8250;
        </button>
      </div>

      <div className="indicadores">
        {fotos.map((_, indice) => (
          <button
            key={indice}
            className={`indicador ${indice === indiceAtual ? 'ativo' : ''}`}
            onClick={() => irParaSlide(indice)}
            aria-label={`Ir para slide ${indice + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrossel
import { useState, useEffect } from 'react'
import Cabecalho from './componentes/Cabecalho'
import Carrossel from './componentes/Carrossel'
import SecaoPrincipal from './componentes/SecaoPrincipal'
import './estilos/Aplicativo.css'

function Aplicativo() {
  const [fotos, setFotos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    const buscarFotos = async () => {
      try {
        setCarregando(true)
        const resposta = await fetch('https://api-back-be2s.onrender.com/fotos')
        
        if (!resposta.ok) {
          throw new Error('Erro ao carregar as fotos')
        }
        
        const dados = await resposta.json()
        setFotos(dados)
      } catch (error) {
        console.error('Erro ao buscar fotos:', error)
        setErro('Não foi possível carregar as fotos')
      } finally {
        setCarregando(false)
      }
    }

    buscarFotos()
  }, [])

  return (
    <div className="aplicativo">
      <Cabecalho />
      <SecaoPrincipal />
      
      <section className="secao-carrossel">
        <div className="container">
          <h2 className="titulo-secao">Nossas Instalações</h2>
          
          {carregando && (
            <div className="carregando">
              <div className="spinner"></div>
              <p>Carregando fotos...</p>
            </div>
          )}
          
          {erro && (
            <div className="erro">
              <p>{erro}</p>
            </div>
          )}
          
          {!carregando && !erro && fotos.length > 0 && (
            <Carrossel fotos={fotos} />
          )}
          
          {!carregando && !erro && fotos.length === 0 && (
            <div className="sem-fotos">
              <p>Nenhuma foto encontrada</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Aplicativo
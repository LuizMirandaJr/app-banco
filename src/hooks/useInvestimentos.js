// Hook é basicamente uma função que tem 'estados'
// O que são estados no react: variáveis que quando mudam, faz o componente mudar
// Ex: useState, useEffect

// Hook personalizado -> é uma função que expoe variáveis e funções para serem reutilizadas
import { useState, useEffect } from 'react'
import { listarInvestimentos } from '../services/investimentosServices'

export function useInvestimentos() {
  const [investimentos, setInvestimentos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function esperar() {
    return new Promise((resolve) => setTimeout(resolve, 5000))
  }

  // array de dependencias vazio
  // Faz com que seja executado apenas 1 vez, quando o componente for montado
  useEffect(() => {

    // para realizar o fetch / GET na api
    // eu jogo o dado para dentro de uma variável
    // verifico que o dado é valido 
    // salvo este dado em um useState para que seja renderizado na tela
    async function fecthInvestimentos() {

      setLoading(true)

      await esperar()

      listarInvestimentos().then((dados) => { setInvestimentos(dados) })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }

    fecthInvestimentos()
  }, [])


  return { investimentos, loading, error }
}
// Como usar:
// const { investimentos } = useInvestimentos() // hook personalizado
import { useEffect, useState } from "react"
import { listarInvestimentos } from "../services/investimentoServices"

export function useInvestimentos() {
    const [investimentos, setInvestimentos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        setLoading(true)

        listarInvestimentos().then((dados) => {
            setInvestimentos(dados)
        }).catch(error => console.error('Erro ao buscar investimentos:', error))
            .finally(() => setLoading(false))
        /*  async function fetchInvestimentos() {
 
             try {
                 const response = await fetch('http://localhost:3000/investimentos')
 
                 if (!response.ok) {
                     throw new Error('Erro ao buscar investimentos na API + response.status')
                 }
 
                 const dados = await response.json()
 
                 console.log('Resposta da API de investimentos')
                 console.log(dados)
 
                 setInvestimentos(dados)
 
             } catch (error) {
                 console.error('Erro ao buscar investimentos', error)
             }
         }
 
         fetchInvestimentos()
         return { investimentos, loading, error }
  */
    }, [])
}
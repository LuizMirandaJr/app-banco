import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Investimento() {

    const [investimento, setInvestimento] = useState(null)

    const { id } = useParams() //pega o id da rota -> /investimentos/100 -> id = 100

    // sempre vai executar quando o ID for alterado
    useEffect(() => {
        async function buscarInvestimento() {
            try {
                const response = await fetch(`http://localhost:3000/investimentos/${id}`)

                if (response.status === 404) {
                    throw new Error('Investimento não encontrado')
                }

                if (!response.ok) {
                    throw new Error('Erro ao buscar investimento')
                }

                const dado = await response.json() // transforma a resposta em json
                setInvestimento(dado)

            } catch (error) {
                console.error(error)
            }
        }

        buscarInvestimento()


    }, [id])

    return (
        <div>
            <h1>Investimento</h1>
            {investimento && (
                <div>
                    <p><strong>Nome:</strong> {investimento.nome}</p>
                    <p><strong>Valor:</strong> {investimento.valorMinimo}</p>
                </div>
            )}
        </div>
    )
}

export default Investimento
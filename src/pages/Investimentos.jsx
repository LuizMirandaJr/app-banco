import { useEffect, useState } from "react"
/* 
Modelagem de dados para Investimentos
    {
            "id": 1,
            "nome": "CDB do Banco Master",
            "tipo": "CDB",
            "valorMinimo": 10,
            "rentabilidade12meses": 680,
            "banco": {
                "id": 0,
                "nome": "Banco Master"
            }
        }
*/

function Investimentos() {

    const [investimentos, setInvestimentos] = useState([

    ])

    useEffect(() => {
        // realizar o fetch / GET na api
        async function fetchInvestimentos() {

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
    }, [])

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1>Investimentos</h1>

            <div className="grid gap-4 grid-cols-3">
                {investimentos.map((investimento) => (
                    <div key={investimento.id} className="flex flex-col gap-1 rounded-lg border p-4 shadow-sm">
                        <span className="text-xs font-semibold uppercase text-gray-500">{investimento.tipo}</span>
                        <h2 className="text-lg font-bold">{investimento.nome}</h2>
                        <span>Banco: {investimento.banco.nome}</span>
                        <span>Valor Mínimo: R${investimento.valorMinimo}</span>
                        <span>Rentabilidade 12 Meses: {investimento.rentabilidade12meses}</span>
                        <button className="bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 rounded-lg">Investir</button>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default Investimentos
import { useEffect, useState } from "react"
import CardInvestimento from "../components/CardInvestimento"
import { useInvestimentos } from "../hooks/useInvestimento"

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
*/

function Investimentos() {

    const { investimentos } = useInvestimentos()

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1>Investimentos</h1>

            <div className="grid gap-4 grid-cols-3">
                {investimentos.map((investimento) => (
                    <CardInvestimento key={investimento.id} investimento={investimento} />
                ))}
            </div>
        </div>
    )


}
export default Investimentos
/* 
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


function CardInvestimento() {
    return (
        <div key={investimento.id} className="flex flex-col gap-1 rounded-lg border p-4 shadow-sm">
            <span className="text-xs font-semibold uppercase text-gray-500">{investimento.tipo}</span>
            <h2 className="text-lg font-bold">{investimento.nome}</h2>
            <span>Banco: {investimento.banco.nome}</span>
            <span>Valor Mínimo: R${investimento.valorMinimo}</span>
            <span>Rentabilidade 12 Meses: {investimento.rentabilidade12meses}</span>
            <button className="bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 rounded-lg cursor-pointer">Investir</button>

        </div>
    )
}

export default CardInvestimento
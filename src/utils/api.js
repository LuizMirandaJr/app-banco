const BASE_URL = 'http://localhost:3000'

export async function apiGet(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`)

    if (!response.ok) {
        throw new Error(`Erro ao buscar ${endpoint}: ${response.status}`)
    }

    return response.json()

}
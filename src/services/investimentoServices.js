import { apiGet } from "../utils/api";

export function listarInvestimentos() {
    return apiGet('investimentos')
}
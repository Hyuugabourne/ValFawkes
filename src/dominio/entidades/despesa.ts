import { Entidade } from "../core/entidade";
import { Fornecedor } from "./fornecedor";
import { NaturezaDespesa } from "./natureza_despesa";

type DespesaProps = {
    mes: number,
    ano: number,
    natureza: NaturezaDespesa
    valor: number,
    fornecedores: Fornecedor[]
}

export class Despesa extends Entidade<DespesaProps> {
    
}
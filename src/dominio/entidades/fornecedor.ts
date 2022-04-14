import { Entidade } from '../core/entidade'

type FornecedorProps = {
    nome: string,
    documento: number,
    valor: number

}

export class Fornecedor extends Entidade<FornecedorProps> {

}

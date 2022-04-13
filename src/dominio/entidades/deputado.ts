import { Entidade } from "../core/entidade";
import { Legislatura } from "./legislatura";

export type DeputadoProps = {
    matricula: number
    nome: string
    areaAtuacao: string[],
    base: string[],
    partido: string,
    mandato: Legislatura
}

export class Deputado extends Entidade<DeputadoProps> {
    
    private constructor(props: DeputadoProps, id?: string) {
        super(props, id)
    }

    static create(props: DeputadoProps, id?: string) {
        return new Deputado(props, id)
    }

    equals(props: DeputadoProps): boolean {
        const entrada = JSON.stringify(props)
        const original = JSON.stringify(this.props)

        return entrada === original
    }

}
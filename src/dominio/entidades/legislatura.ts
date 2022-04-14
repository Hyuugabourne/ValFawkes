import { Entidade } from '../core/entidade'
import { Despesa } from './despesa'

type LegislaturaProps = {
    inicio: Date,
    fim: Date,
    noExercicio: boolean,
    despesas: Despesa[]
}

export class Legislatura extends Entidade<LegislaturaProps> {
  private constructor (props: LegislaturaProps, id?: string) {
    super(props, id)
  }

  static create (props: LegislaturaProps, id?: string) {
    return new Legislatura(props, id)
  }
}

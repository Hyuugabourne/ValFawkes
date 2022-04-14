import { Deputado, DeputadoProps } from '../../dominio/entidades/deputado'
import { CoreRepo } from '../core.repo'

export class DeputadoRepository extends CoreRepo<Deputado> {
  constructor (chave?: string) {
    super(chave ?? 'deputados')
  }

  get (matricula: number): Deputado {
    return this.dados.find((it) => it.props.matricula === matricula)
  }

  list (): Deputado[] {
    return this.dados
  }

  save (props: DeputadoProps): Deputado {
    const deputado = Deputado.create(props)
    this.dados.push(deputado)
    this.escrever()
    return deputado
  }

  update (props: DeputadoProps) {
    this.dados.forEach((d) => {
      if (d.props.matricula === props.matricula) {
        d.props = props
      }
    })
  }
}

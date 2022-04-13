import { Deputado, DeputadoProps } from "../../dominio/entidades/deputado";


export class DeputadoRepository {
    private dados: Deputado[];

    constructor() {
        this.dados = require("../entities/deputado.json");
    }

    get(matricula: number): Deputado {
        return this.dados.find((it) => it.props.matricula === matricula);
    }

    list(): Deputado[] {
        return this.dados;
    }

    save(props: DeputadoProps): Deputado {
        const deputado = Deputado.create(props);
        this.dados.push(deputado);
        return deputado;
    }

    update(props: DeputadoProps) {
        this.dados.forEach((d) => {
        if (d.props.matricula === props.matricula) {
            d.props = props;
        }
        });
    }
}

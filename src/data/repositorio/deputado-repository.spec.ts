import { assert } from "console";
import { DeputadoProps } from "../../dominio/entidades/deputado";
import { Legislatura } from "../../dominio/entidades/legislatura";
import { DeputadoRepository } from "./deputado-repository"

describe('dados de acesso de deputado', () => {

    it('deve criar um deputado', () => {
        const repo = new DeputadoRepository();

        const deputadoProps = {
            areaAtuacao: ["teste"],
            base: ["teste"],
            mandato: {},
            matricula: 123,
            nome: "teste",
            partido: "teste",
        } as DeputadoProps
        const result = repo.save(deputadoProps)
        expect(result).toBeTruthy()
    })
})
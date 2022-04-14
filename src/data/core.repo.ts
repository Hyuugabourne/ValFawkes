import crypto from 'crypto'
import fs from 'fs'

export abstract class CoreRepo<T> {
  protected dados: T[]
  private CHAVE: string
  private patch: string

  constructor (key?: string) {
    this.CHAVE = key ?? crypto.randomUUID()
    this.patch = `/entidades/${typeof this.dados}/${key}.json`
    if (key) {
      this.ler()
    }
  }

  ler () {
    fs.readFile(this.patch, 'utf8', (err, data: string) => {
      if (err) {
        console.log(err)
      }
      this.dados = JSON.parse(data)
    })
  }

  escrever () {
    fs.writeFile(this.patch, JSON.stringify(this.dados), (err) => {
      console.log(err)
    })
  }
}

import crypto from 'crypto'

export abstract class Entidade<T> {

    protected _id: string
    public props: T

    constructor(props: T, id?: string){
        this.props = props
        this._id = id ?? crypto.randomUUID()
    }
}
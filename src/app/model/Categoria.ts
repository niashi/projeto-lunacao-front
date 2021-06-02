import { Produto } from "./Produto"

export class Categoria {

    public id: number

    public descricao: string

    public reut_descart: boolean

    public produto: Produto[]
}
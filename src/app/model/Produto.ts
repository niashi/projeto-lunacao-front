import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto {

    public id: number

    public nome: string

    public descricao: string

    public imagem: string

    public usuario: Usuario

    public categoria: Categoria
}
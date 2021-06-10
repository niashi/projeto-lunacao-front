import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  categoria: Categoria = new Categoria
  listaProdutos: Produto[]

  produto: Produto = new Produto()
  listaCategorias: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private catogoriaService: CategoriaService,
    private authService: AuthService

  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/logar'])
    }

    this.getAllCategorias()
    this.getAllProdutos()
    /* this.getByIdUsuario() */
  }

  getAllCategorias(){
    this.catogoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.catogoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })

  }

    getAllProdutos() {
      this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }

    findByIdUsuario() {
      this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
        this.usuario = resp
      })
    }

  publicar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario 

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto
      this.getAllProdutos()
    })
  }
}

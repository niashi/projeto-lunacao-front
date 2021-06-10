import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/logar'])
       this.alertas.showAlertInfo('Sua sessão expirou, entre novamente!')
        
    }

    if(environment.tipo != 'adm') {
      this.alertas.showAlertInfo('Você precisa ser ADM para acessar essa tela')
      this.router.navigate(['/principal'])
    }

    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=> {
      this.listaCategorias = resp
    })
  }

  cadastrar() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=> {
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria Cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }

}

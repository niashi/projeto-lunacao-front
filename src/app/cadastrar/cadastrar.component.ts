import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string


  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.mostrarSenha()
    this.mostrarConfirmSenha()
  }

  confirmSenha(event: any) {

    this.confirmarSenha = event.target.value

  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas!')
    }else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/logar'])
        alert('Usuário cadastrado com Sucesso!')
      })
    }
  }

  mostrarSenha() {
    let btn = document.querySelector('.fa-eye')

    btn?.addEventListener('click', () => {
      let inputSenha = document.querySelector('#senha')

      if (inputSenha?.getAttribute('type') == 'password') {
        inputSenha?.setAttribute('type', 'text')
      } else {
        inputSenha?.setAttribute('type', 'password')
      }
    })
  }

  mostrarConfirmSenha() {
    let btn = document.querySelector('.fa-eye')

    btn?.addEventListener('click', () => {
      let inputSenha = document.querySelector('#confirmSenha')

      if (inputSenha?.getAttribute('type') == 'password') {
        inputSenha?.setAttribute('type', 'text')
      } else {
        inputSenha?.setAttribute('type', 'password')
      }
    })
  }

}

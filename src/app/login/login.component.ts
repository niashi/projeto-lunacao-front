import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.mostrarSenha()
    /* this.entrar() */
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id
      environment.tipo = this.usuarioLogin.tipo
       
      localStorage.setItem('token',this.usuarioLogin.token)

      this.router.navigate(['/principal'])
    }, erro =>{
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })
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
  
}

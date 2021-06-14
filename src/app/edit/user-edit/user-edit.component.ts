import { Usuario } from './../../model/Usuario';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUser: number
  confirmarSenha: string
  tipoUser: string




  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == ''){
      this.router.navigate(['/logar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {

    this.confirmarSenha = event.target.value

  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }
  atualizar(){

    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas!')
    }else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/principal'])
        alert('Suas alterações foram salvas! Faça login novamente para completar a atualização.')

          this.router.navigate(['/logar'])
          environment.token=''
          environment.nome=''
          environment.foto=''
          environment.id = 0

      })
    }

  }

  findByIdUser(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
       this.usuario = resp
     })
   }

   
}


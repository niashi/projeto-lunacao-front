import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUser: number

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

    /* this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser) */
  }

  confirmSenha(event: any){

  }

  tipoUsuario(event: any){

  }

  atualizar(){

  }

  /* findByIdUser(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  } */
}

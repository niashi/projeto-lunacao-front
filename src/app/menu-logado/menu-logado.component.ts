import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.foto
  
  constructor(
    private router: Router,
    public auth: AuthService

    ) { }

  ngOnInit() {
  }

  
  logout(){
    this.router.navigate(['/principal'])
    environment.token=''
    environment.nome=''
    environment.foto=''
    environment.id = 0

  }
}

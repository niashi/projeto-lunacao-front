import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
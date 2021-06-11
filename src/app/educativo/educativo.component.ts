import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-educativo',
  templateUrl: './educativo.component.html',
  styleUrls: ['./educativo.component.css']
})
export class EducativoComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
   /*  if(environment.token == ''){
      this.router.navigate(['/logar'])
      this.alertas.showAlertInfo('Sua sessão expirou, entre novamente!')
    } */
  }

}

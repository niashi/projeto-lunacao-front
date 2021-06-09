import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-educativo',
  templateUrl: './educativo.component.html',
  styleUrls: ['./educativo.component.css']
})
export class EducativoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/logar'])
     // alert('Sua sessão expirou, entre novamente!')
    }
  }

}

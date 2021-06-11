import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    
  ) { }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(`${environment.server}/usuarios/logar`, usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.server}/usuarios/cadastrar`, usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.server}/usuarios/${id}`)
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok
  }

  adm() {
    let ok: boolean = false
    if  (environment.tipo == 'adm') {
      ok = true
    }

    return ok
  }

  doador() {
    let ok: boolean = false
    if  (environment.tipo == 'doador') {
      ok = true
    }

    return ok
  }

  fotoUser(){
    return environment.foto
  }

  nomeUser(){
    return environment.nome
  }

  idUser(){
    return environment.id
  }

  menuOf(){
    let ok: boolean = true
    let rota = this.router.url
    if(rota.indexOf('logar') != -1 || rota.indexOf('cadastrar') != -1){
      ok = false
    }

    return ok
  }
}

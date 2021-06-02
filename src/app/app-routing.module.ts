import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EducativoComponent } from './educativo/educativo.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [

  {path:'' , redirectTo: 'principal' , pathMatch: 'full'},

  {path:'login' , component: LoginComponent},

  {path:'cadastrar', component:CadastrarComponent},

  {path:'educativo' , component: EducativoComponent},

  {path: 'principal' , component: PrincipalComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

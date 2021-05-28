import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EducativoComponent } from './educativo/educativo.component';

const routes: Routes = [

  {path:'' , redirectTo: 'educativo' , pathMatch: 'full'},

  {path:'login' , component: LoginComponent},

  {path:'cadastrar',component:CadastrarComponent},

  {path:'educativo' , component: EducativoComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

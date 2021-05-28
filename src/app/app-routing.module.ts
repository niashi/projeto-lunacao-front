import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'' , redirectTo: 'login' , pathMatch: 'full'},

  {path:'login' , component: LoginComponent}  
=======
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [

  
  {path:'cadastrar',component:CadastrarComponent}
>>>>>>> 75ba4ecc6180122305972b608b8e8ce63414a587

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

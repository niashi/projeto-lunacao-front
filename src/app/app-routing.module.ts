import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EducativoComponent } from './educativo/educativo.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';



const routes: Routes = [

  {path:'' , redirectTo: 'principal' , pathMatch: 'full'},

  {path:'logar' , component: LoginComponent},

  {path:'cadastrar', component:CadastrarComponent},

  {path:'educativo' , component: EducativoComponent},

  {path: 'principal' , component: PrincipalComponent},

  {path: 'categoria' , component: CategoriaComponent},

  {path: 'categoria-edit/:id', component: CategoriaEditComponent},

  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},

  {path: 'produto-edit/:id', component: ProdutoEditComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

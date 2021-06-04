import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EducativoComponent } from './educativo/educativo.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    EducativoComponent,
    MenuComponent,
    LoginComponent,
    CadastrarComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

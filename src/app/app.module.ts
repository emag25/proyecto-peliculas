import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DataUsuariosService } from './servicios/dataUsuarios.service';
import { CookieService } from 'ngx-cookie-service';
import { ListenerService } from './servicios/listener.service';
import { Error403Component } from './error403/error403.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { Error404Component } from './error404/error404.component';




@NgModule({
  declarations: [						
    AppComponent,
    PeliculasComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    UsuarioComponent,
    PerfilComponent,
    Error403Component,
    PeliculaComponent,
    Error404Component
   ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonToggleModule
  ],

  providers: [DataUsuariosService, CookieService, ListenerService],

  bootstrap: [AppComponent]
})

export class AppModule { }

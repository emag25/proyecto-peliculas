import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataGenerosService } from '../servicios/dataGeneros.service';
import { DataPeliculasService } from '../servicios/dataPeliculas.service';
import { ListenerService } from '../servicios/listener.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {

  active: boolean = false;
  protected peliculas = this.dataPeliculas.getPeliculas();
  protected generos = this.dataGeneros.getGeneros();

  constructor(private listener: ListenerService, private router: Router, private cookie: CookieService,
    private dataPeliculas: DataPeliculasService, private dataGeneros: DataGenerosService) {
    this.active = this.cookie.get('active') === 'true' ? true : false;
    this.listener.changeState(this.active, this.cookie.get('username'));
  }

  ngOnInit() {   }

  irAgregar() {
    this.router.navigate(['/peliculas-agregar']);  // componente no creado aun
  }
  
  clasificarPeliculas(genero: number) {
    this.peliculas = this.dataPeliculas.findPeliculasByGenero(genero);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPeliculasService } from '../servicios/dataPeliculas.service';
import { ListenerService } from '../servicios/listener.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
  
export class PeliculaComponent implements OnInit {

  @Input() pelicula: any;
  matBadge: number = 0;
  disabledAdd: boolean = false;
  disabledRemove: boolean = true;
  icono: string = 'add_shopping_cart';
  btnNombre: string = 'Añadir al carrito';
  checked: boolean = false;

  constructor(private dataPeliculas:DataPeliculasService, private router:Router, private listener:ListenerService) { }

  ngOnInit() {
    this.listener.customMatBadge.subscribe(matBadge => this.matBadge = matBadge);
  }

  irEditar(id: number) {
    this.router.navigate(['/peliculas-editar',id]); // componente no creado aun
  }

  eliminar(id: number) {
    this.dataPeliculas.deletePelicula(id);
  }

  onClick() {

    if (this.checked) {
      this.icono = 'remove_shopping_cart';
      this.btnNombre = 'Eliminar del carrito';
      this.addPelicula();

    } else{
      this.icono = 'add_shopping_cart';
      this.btnNombre = 'Añadir al carrito';
      this.removePelicula();
    }

  }

  addPelicula() {
    this.listener.addMatBadge(this.listener.getMatBadge());
    /* this.disabledAdd = true;
    this.disabledRemove = false; */
  }

  removePelicula() {
    this.listener.restMatBadge(this.listener.getMatBadge());
    /* this.disabledRemove = true;
    this.disabledAdd = false; */
  }

}
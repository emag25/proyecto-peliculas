import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ListenerService } from '../servicios/listener.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  active: boolean = false;
  //id:number = this.cookie.get('id');  // asi obtienen el id del usuario logueado y 
  // consultan al servicio dataUsuarios para traer los datos y ponerlos en el perfil
  // da error porque la cookie trae un string y el id es un number, hay que hacer un parse

  constructor(private listener: ListenerService, private cookie: CookieService) { 
    this.active = this.cookie.get('active') === 'true' ? true : false;
    this.listener.changeState(this.active, this.cookie.get('username'));
  }

  ngOnInit() {
  }

  // Cambiar contrasenia 
  // es un "expansion panel" que se abre y aparecen los 3 campos.

}

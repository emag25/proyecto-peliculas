import { Injectable } from '@angular/core';
import { Genero } from '../peliculas/genero.model';

@Injectable({
  providedIn: 'root'
})
export class DataGenerosService {
  
  private generos: Genero[] = [
    {
      id: 1,
      nombre: 'Fantasia'
    },
    {
      id: 2,
      nombre: 'Animacion'
    },
    {
      id: 3,
      nombre: 'Superheroes'
    },
    {
      id: 4,
      nombre: 'Terror'
    }
  ];

  constructor() { }


  getGeneros(): Genero[] {
    return this.generos;
  }


  deleteGeneros(id: number) {

    let obj = this.generos.find(genero => genero.id === id);

    if (obj !== undefined) {
      let index = this.generos.indexOf(obj);
      this.generos.splice(index, 1);
      return true;

    } else {
      return false;
    }

  }

}

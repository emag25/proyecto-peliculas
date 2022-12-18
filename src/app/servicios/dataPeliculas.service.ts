import { Injectable } from '@angular/core';
import { Pelicula } from '../peliculas/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class DataPeliculasService {

  private peliculas: Pelicula[] = [
    {
      id: 1110,
      titulo: 'El señor de los anillos',
      descripcion: 'El señor de los anillos es una película de fantasía épica estadounidense de 2001 basada en la novela homónima de J. R. R. Tolkien.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 150,
      genero: 1

    },
    {
      id: 2771,
      titulo: 'Avengers: Endgame',
      descripcion: 'Esta película es la secuela de Avengers: Infinity War (2018) y la decimoquinta entrega del Universo cinematográfico de Marvel.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 190,
      genero: 3
    },
    {
      id: 3080,
      titulo: 'Barbie y el castillo de diamantes',
      descripcion: 'Barbie y el castillo de diamantes es una película de animación de 2008 dirigida por Gino Nichele y producida por Arc Productions y Mattel Entertainment.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 120,
      genero: 2
    },
    {
      id: 4080,
      titulo: 'Piratas del caribe: La maldición de la perla negra',
      descripcion: 'Es una película de aventuras de 2003 dirigida por Gore Verbinski y protagonizada por Johnny Depp, Jonathan Pryce, Lee Arenberg,Kevin McNally y Bill Nighy.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 120,
      genero: 1
    },
    {
      id: 6680,
      titulo: 'Mulan: La leyenda',
      descripcion: 'Es una película de animación de 1998 dirigida por Tony Bancroft y Barry Cook, producida por Walt Disney Feature Animation y distribuida por Walt Disney Pictures.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 120,
      genero: 2
    },
    {
      id: 2881,
      titulo: 'Capitana Marvel',
      descripcion: 'Esta película es la vigesimosexta entrega del Universo cinematográfico de Marvel y la primera en ser protagonizada por una superheroína femenina.',
      imagen: '../assets/peliculas-imagenes/barbie.jpg',
      anioEstreno: 2001,
      duracion: 190,
      genero: 3
    }
  ];

  constructor() { }
  

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }


  findPeliculasByGenero(genero: number): Pelicula[] {
    if (genero === 0) {
      return this.peliculas;
    }
    return this.peliculas.filter(pelicula => pelicula.genero === genero);
  }


  deletePelicula(id: number) {
    
    let obj = this.peliculas.find(pelicula => pelicula.id === id);

    if (obj !== undefined) {
      let index = this.peliculas.indexOf(obj);
      this.peliculas.splice(index, 1);
      return true;
      
    } else {
      return false;
    }
      
  }

}

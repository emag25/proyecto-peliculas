export class Pelicula {
    
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    anioEstreno: number;
    duracion: number;
    genero: number;

    constructor(id: number, titulo: string, descripcion: string, imagen: string, anioEstreno: number, duracion: number, genero: number) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.anioEstreno = anioEstreno;
        this.duracion = duracion;
        this.genero = genero;
    }
}
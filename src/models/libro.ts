export class Libro {

    isbn: number;
    titulo: string;
    autor: string
    editorial: string;
    genero: string;
    precio: number;
    descripcion: string;
    imagen: string;
    stock: number;
    constructor(
        isbn: number,
        titulo: string,
        autor: string,
        editorial: string,
        genero: string,
        precio: number,
        descripcion: string,
        imagen: string,
        stock: number,       
    ) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.stock = stock;
    }
}
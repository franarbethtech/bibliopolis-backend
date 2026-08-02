export class Usuario {

  id: number;
  nombre: string;
  correoElectronico: string;
  contrasena: string;
  direccion: string;

  constructor(
    id: number,
    nombre: string,
    correoElectronico: string,
    contrasena: string,
    direccion: string
  ) {

    this.id = id;
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.direccion = direccion;
  }
}
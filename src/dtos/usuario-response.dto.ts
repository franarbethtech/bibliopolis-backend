
export class UsuarioResponseDto {
  id: number;
  nombre: string;
  correoElectronico: string;
  direccion: string;
  constructor(  
    id:number,
    nombre:string,
    correoElectronico:string,
    direccion:string,
  ){
    this.id = id;
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
    this.direccion = direccion;
  }
}
import { ApiProperty } from '@nestjs/swagger';
export class Usuario {
  @ApiProperty({example:1})
  id: number;
  @ApiProperty({example:'John Doe'})
  nombre: string;
  @ApiProperty({example:'john.doe@example.com'})
  correoElectronico: string;
  @ApiProperty({example:'password123'})
  contrasena: string;
  @ApiProperty({example:'123 Main St'})
  direccion: string;

  constructor(
    id: number,
    nombre: string,
    correoElectronico: string,
    contrasena: string,
    direccion: string,
  ) {

    this.id = id;
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.direccion = direccion;
  }
}
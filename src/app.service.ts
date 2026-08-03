import {  BadRequestException, NotFoundException, Injectable } from '@nestjs/common';
import { Usuario } from './models/usuario';
import { UsuarioResponseDto } from './dtos/usuario-response.dto';
import { Libro } from './models/libro';

@Injectable()
export class AppService {
  private usuarios: Usuario[] = [];
  private libros: Libro[] = [];
  private ultimoIdUsuario = 0;

  private convertirId(id: string): number {
  return parseInt(id);
  }

  crearUsuario(usuario: Usuario): Usuario {
    const usuarioExistente = this.usuarios.find(
      (usuarioGuardado) =>
        usuarioGuardado.correoElectronico === usuario.correoElectronico,
    );
     if (usuarioExistente) {
      throw new BadRequestException(
        'El correo electrónico ya se encuentra registrado',
      );
    }
    this.ultimoIdUsuario++;
    const nuevoUsuario = new Usuario(
      this.ultimoIdUsuario,
      usuario.nombre,
      usuario.correoElectronico,
      usuario.contrasena,
      usuario.direccion,
    );
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }
    
  obtenerUsuarioPorId(id: string): Usuario {
    const usuario = this.usuarios.find(
      (usuarioGuardado) => usuarioGuardado.id === this.convertirId(id),
    );
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  obtenerUsuarios(): UsuarioResponseDto[] {
  return this.usuarios.map((usuario) =>
    new UsuarioResponseDto(
      usuario.id,
      usuario.nombre,
      usuario.correoElectronico,
      usuario.direccion,
      ),
    );
  }

  eliminarUsuario(id: string): void {
    const index = this.usuarios.findIndex(
      (usuarioGuardado) => usuarioGuardado.id === this.convertirId(id),
    );
    if (index === -1) {
      throw new NotFoundException('Usuario no encontrado');
    }
    this.usuarios.splice(index, 1);
  }

  crearLibro(libro: Libro): Libro {
    const libroExistente = this.libros.find(
      (libroGuardado) => libroGuardado.isbn === libro.isbn,
    );  
    if (libroExistente) {
      throw new BadRequestException(
        'El libro ya se encuentra registrado',
      );
    }
    const nuevoLibro = new Libro(
      libro.isbn,
      libro.titulo,
      libro.autor,
      libro.editorial,
      libro.genero,
      libro.precio,
      libro.descripcion,
      libro.imagen,
      libro.stock
    );
    this.libros.push(nuevoLibro);
    return nuevoLibro;
  }

  obtenerLibroPorIsbn(isbn: string): Libro {
    const libroEncontrado = this.libros.find(
      (libroGuardado) => libroGuardado.isbn === isbn,
    );
    if (!libroEncontrado) {
      throw new NotFoundException('Libro no encontrado');
    }
    return libroEncontrado;
  }

  obtenerLibros(genero?: string, autor?: string): Libro[] {
    const librosFiltrados = this.libros.filter((libro) => {
      if (autor && genero) {
        return libro.genero === genero && libro.autor === autor;
      } else if (autor){
        return libro.autor === autor;
      } else if (genero) {
        return libro.genero === genero;
      }
      return true
    });
    return librosFiltrados;
  }

  eliminarLibro(isbn: string): void {
    const index = this.libros.findIndex(
      (libroGuardado) => libroGuardado.isbn === isbn,
    );
    if (index === -1) {
      throw new NotFoundException('Libro no encontrado');
    }
    this.libros.splice(index, 1);
  }
  
}

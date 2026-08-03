import {  BadRequestException, NotFoundException, Injectable } from '@nestjs/common';
import { Usuario } from './models/usuario';
import { UsuarioResponseDto } from './dtos/usuario-response.dto';

@Injectable()
export class AppService {
  private usuarios: Usuario[] = [];
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
}

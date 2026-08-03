import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { Usuario } from "../models/usuario";
import { AppService } from '../app.service';

@Controller('usuarios')
export class UsuariosController {
     constructor(private readonly appService: AppService) {}

    @Post() //Registrar un nuevo usuario
    crearUsuario(@Body() usuario: Usuario) {
        return this.appService.crearUsuario(usuario);
    }
    @Get(':id') //Obtener un usuario según su id
    obtenerUsuarioPorId (@Param('id') id: string) {
        return this.appService.obtenerUsuarioPorId(id);
    }

    @Get() //Obtener todos los usuarios
    obtenerUsuarios() {
        return this.appService.obtenerUsuarios();
    }

    @Delete(':id') //Eliminar un usuario según su id
    eliminarUsuario(@Param('id') id: string) {
        return this.appService.eliminarUsuario(id);
    }
    }
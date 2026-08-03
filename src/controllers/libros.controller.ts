import { Controller, Get, Post, Delete, Body, Param, Query } from "@nestjs/common";
import { Libro } from "../models/libro";
import { AppService } from '../app.service';
import { ApiTags, ApiQuery} from '@nestjs/swagger';

@ApiTags('Libros')
@Controller('libros')
export class LibrosController {
     constructor(private readonly appService: AppService) {}

     @Post() //Crear un nuevo libro
     crearLibro(@Body() libro: Libro) {
        return this.appService.crearLibro(libro);
     }

     @Get(':isbn') // Obtener un libro según su ISBN
     obtenerLibroPorIsbn(@Param('isbn') isbn: string) {
        return this.appService.obtenerLibroPorIsbn(isbn);
     }

     @Get() // Obtener libros filtrados por género y/o autor
        @ApiQuery({
        name: 'genero',
        required: false,
        type: String,
        })
        @ApiQuery({
        name: 'autor',
        required: false,
        type: String,
        })
     obtenerLibros(
        @Query('genero') genero?: string,
        @Query('autor') autor?: string,
     ){
        return this.appService.obtenerLibros(genero, autor);
     }

     @Delete(':isbn') //Eliminar un libro según su ISBN
     eliminarLibro(@Param('isbn') isbn: string) {
        return this.appService.eliminarLibro(isbn);
     }
}
import { Controller, Get, Post, Delete, Body, Param, Query } from "@nestjs/common";
import { Pedido } from "../models/pedido";
import { AppService } from '../app.service';
import { ApiTags} from '@nestjs/swagger';
import { Usuario } from "../models/usuario";

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
     constructor(private readonly appService: AppService) {}   

     @Post() //Crear un nuevo pedido
     crearPedido(@Body() pedido: Pedido) {
        return this.appService.crearPedido(pedido);
     }

   //   @Get(':id') //Obtener un pedido según su id
   //   obtenerPedidoPorId (@Param('id') id: string) {
   //      return this.appService.obtenerPedidoPorId(id);
   //   }  

   //   @Get() //Obtener todos los pedidos y permitir filtra los por estado y/o id de usuario
   //      @ApiQuery({
   //      name: 'estado',
   //      required: false,
   //      type: Number,
   //      })
   //      @ApiQuery({
   //      name: 'Usuario',
   //      required: false,
   //      type: Usuario,
   //      })
   //      obtenerPedidosFiltrados(
   //      @Query('estado') estado?: number,
   //      @Query('Usuario') usuario?: Usuario
   //      ){
   //          return this.appService.obtenerPedidosFiltrados(estado, usuario);
   //      }
    

}
import { Usuario } from "./usuario";
import { ItemPedido } from "./item-pedido";
import { UsuarioResponseDto } from "../dtos/usuario-response.dto";
import { ApiProperty } from '@nestjs/swagger';

export class Pedido {
    @ApiProperty({example:1})
    id: number;
    @ApiProperty({example:1})
    idUsuario: number;
    @ApiProperty({example:new Date()})
    fechapedido: Date;  
    @ApiProperty({example:'pendiente'})
    estado: string;
    @ApiProperty({example:100.00})
    total: number;
    @ApiProperty({type: [ItemPedido]})
    items: ItemPedido[];
    constructor(
        id: number,
        idUsuario: number,
        fechapedido: Date,
        estado: string,
        total: number,
        items: ItemPedido[],
    ) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.fechapedido = fechapedido;
        this.estado = estado;
        this.total = total;
        this.items = items;
    }
}
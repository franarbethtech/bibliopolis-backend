import { Usuario } from "./usuario";
import { ItemPedido } from "./item-pedido";

export class Pedido {
    id: number;
    usuario: Usuario;
    fechapedido: Date;  
    estado: string;
    total: number;
    items: ItemPedido[];
    constructor(
        id: number,
        usuario: Usuario,
        fechapedido: Date,
        estado: string,
        total: number,
        items: ItemPedido[],
    ) {
        this.id = id;
        this.usuario = usuario;
        this.fechapedido = fechapedido;
        this.estado = estado;
        this.total = total;
        this.items = items;
    }
}
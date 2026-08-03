import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { LibrosController } from './controllers/libros.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, LibrosController],
  providers: [AppService],
})
export class AppModule {}

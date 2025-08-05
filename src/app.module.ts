import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { EquiposModule } from './equipos/equipos.module';

@Module({
  imports: [CustomersModule, JugadoresModule, EquiposModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

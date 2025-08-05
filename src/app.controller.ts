import {  Controller, 
          Get,
          Post,
          Patch,
          Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("cars")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  crearCarro(): string {
    return ("Aqui se van a registrar los carros")
  }

}

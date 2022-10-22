import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEndpoints(): string {
    return this.appService.getEndpoints();
  }

  @Get("/vehicles")
  getVehicles(): string {
    return this.appService.getVehicles();
  }
  @Get("/vehicles/car")
  getVehiclesByQueryName(@Query() query): string {
    return this.appService.getVehiclesByQueryName(query.name);
  }
  @Get("/vehicles/:Origin")
  getVehiclesByOrigin(@Param() params): string {
    return this.appService.getVehiclesByOrigin(params.Origin);
  }

}

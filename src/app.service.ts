import { Injectable } from '@nestjs/common';
var cars = require ('../data/cars');

@Injectable()
export class AppService {
  getEndpoints(): string {
    var endpoints = '<li>/vehicles - See all vehicles</li><li>/vehicles/{Origin} - Filter all vehicles by Origin</li>'
    return endpoints;
  }
  getVehicles(): string {
    return cars;
  }
  getVehiclesByOrigin(Origin): string {
    return cars.filter(car => car.Origin === Origin);
  }
  getVehiclesByQueryName(name): string {
    return cars.filter(car => car.Name === name);
  }
}

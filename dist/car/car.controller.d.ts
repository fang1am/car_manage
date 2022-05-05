import { CarService } from './car.service';
import { CarDto } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    getCars(): Promise<CarDto[]>;
    postCars(car: CarDto): Promise<import("./interfaces/car.interface").Icar & {
        _id: any;
    }>;
    getCarById(id: number): Promise<CarDto>;
    deleteCarById(id: number): Promise<import("mongodb").DeleteResult>;
    putCarById(id: number, query: any): Promise<CarDto>;
}

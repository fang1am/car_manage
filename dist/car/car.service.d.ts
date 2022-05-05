import { Model } from 'mongoose';
import { Icar } from './interfaces/car.interface';
import { CarDto } from './car.dto';
export declare class CarService {
    private readonly carModel;
    constructor(carModel: Model<Icar>);
    getCars(): Promise<CarDto[]>;
    postCars(newCar: CarDto): Promise<Icar & {
        _id: any;
    }>;
    getCarById(id: number): Promise<CarDto>;
    deleteCarById(id: number): Promise<import("mongodb").DeleteResult>;
    putCarById(id: number, propertyName: string, propertyValue: string): Promise<CarDto>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CarService = class CarService {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async getCars() {
        const cars = await this.carModel.find().exec();
        if (!cars || !cars[0]) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return cars;
    }
    async postCars(newCar) {
        const car = await new this.carModel(newCar);
        return car.save();
    }
    async getCarById(id) {
        const car = await this.carModel.findOne({ id }).exec();
        if (!car) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
    async deleteCarById(id) {
        const car = await this.carModel.deleteOne({ id }).exec();
        if (car.deletedCount === 0) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
    async putCarById(id, propertyName, propertyValue) {
        const car = await this.carModel
            .findByIdAndUpdate({ id }, { [propertyName]: [propertyValue] })
            .exec();
        if (!car) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
};
CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Car')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map
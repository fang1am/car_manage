"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
const mongoose = require("mongoose");
exports.CarSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    model: String,
});
//# sourceMappingURL=car.schema.js.map
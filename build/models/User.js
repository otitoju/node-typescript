"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserInfo = new mongoose_1.default.Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String }
}, { timestamps: true });
exports.default = mongoose_1.default.model("users", UserInfo);

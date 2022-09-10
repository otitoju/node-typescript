"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = __importDefault(require("../models/User"));
const logger_service_1 = require("./logger.service");
const Logger = new logger_service_1.LoggerService();
class UserService {
    constructor() { }
    static createNewUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User_1.default.create(payload);
            }
            catch (error) {
                Logger.Tracer("Create New User", error.message, error);
            }
        });
    }
    static getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User_1.default.findOne({ _id: userId });
            }
            catch (error) {
                Logger.Tracer("get a single user", error.message, error);
            }
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User_1.default.find({});
            }
            catch (error) {
                Logger.Tracer("get users", error.message, error);
            }
        });
    }
    static deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield User_1.default.findOneAndDelete({ _id: userId });
            }
            catch (error) {
                Logger.Tracer("delete user", error.message, error);
            }
        });
    }
}
exports.UserService = UserService;

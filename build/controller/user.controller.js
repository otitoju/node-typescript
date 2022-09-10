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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const logger_service_1 = require("../services/logger.service");
const user_service_1 = require("../services/user.service");
const Logger = new logger_service_1.LoggerService();
class UserController {
    static createNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, phone, fname, lname } = req.body;
                if (!email || !password || !phone || !fname || !lname) {
                    return res.status(400).json({
                        message: "Please fill in all inputs"
                    });
                }
                else {
                    const info = yield user_service_1.UserService.createNewUser(req.body);
                    return res.status(201).json({
                        message: "Created",
                        info: info
                    });
                }
            }
            catch (error) {
                Logger.Tracer("createNewUser", error.message, error);
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const info = yield user_service_1.UserService.getUser(userId);
                if (!info) {
                    return res.status(404).json({
                        message: "No user record found."
                    });
                }
                else {
                    return res.status(200).json({
                        info: info
                    });
                }
            }
            catch (error) {
                Logger.Tracer("getUser", error.message, error);
            }
        });
    }
    static getUsers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const info = yield user_service_1.UserService.getUsers();
                if (!info) {
                    return res.status(404).json({
                        message: "No record found."
                    });
                }
                else {
                    return res.status(200).json({
                        info: info
                    });
                }
            }
            catch (error) {
                Logger.Tracer("getUsers", error.message, error);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const info = yield user_service_1.UserService.deleteUser(userId);
                if (!info) {
                    return res.status(404).json({
                        message: "No record found."
                    });
                }
                else {
                    return res.status(200).json({
                        message: "User deleted successfully."
                    });
                }
            }
            catch (error) {
                Logger.Tracer("deleteUser", error.message, error);
            }
        });
    }
    static updateUserInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const info = yield user_service_1.UserService.getUser(userId);
                if (!info) {
                    return res.status(404).json({
                        message: "No user found."
                    });
                }
                else {
                    info.fname = req.body.fname || info.fname;
                    info.lname = req.body.lname || info.lname;
                    info.phone = req.body.phone || info.phone;
                    info.password = req.body.password || info.password;
                    info.email = req.body.email || info.email;
                    yield info.save();
                    return res.status(200).json({
                        message: "User information updated successfully."
                    });
                }
            }
            catch (error) {
                Logger.Tracer("updateUserInfo", error.message, error);
            }
        });
    }
}
exports.UserController = UserController;

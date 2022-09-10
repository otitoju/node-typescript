"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.post("/api/v1/CreateNewUser", user_controller_1.UserController.createNewUser);
router.get("/api/v1/getUsers", user_controller_1.UserController.getUsers);
router.get("/api/v1/getUser/:userId", user_controller_1.UserController.getUser);
router.delete("/api/v1/deleteUser/:userId", user_controller_1.UserController.deleteUser);
router.put("/api/v1/updateUser/:userId", user_controller_1.UserController.updateUserInfo);
exports.default = router;

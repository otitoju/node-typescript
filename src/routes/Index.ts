import express from "express";
import { UserController } from "../controller/user.controller";
const router = express.Router();

router.post("/api/v1/CreateNewUser", UserController.createNewUser);
router.get("/api/v1/getUsers", UserController.getUsers);
router.get("/api/v1/getUser/:userId", UserController.getUser);
router.delete("/api/v1/deleteUser/:userId", UserController.deleteUser);
router.put("/api/v1/updateUser/:userId", UserController.updateUserInfo);


export default router;

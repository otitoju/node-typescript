import { LoggerService } from "../services/logger.service";
import { Request, Response } from "express";
import { UserModel } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";
const Logger = new LoggerService();

export class UserController {
    static async createNewUser(req: Request, res: Response) {
        try {
            const { email, password, phone, fname, lname }: UserModel = req.body;

            if(!email || !password || !phone || !fname || !lname) {
                return res.status(400).json({
                    message: "Please fill in all inputs"
                });
            }
            else {
                const info = await UserService.createNewUser(req.body);
                return res.status(201).json({
                    message: "Created",
                    info: info
                });
            }
        } catch (error: any) {
            Logger.Tracer("createNewUser", error.message, error);
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const info = await UserService.getUser(userId);
            if(!info) {
                return res.status(404).json({
                    message: "No user record found."
                });
            }
            else {
                return res.status(200).json({
                    info: info
                });
            }
        } catch (error: any) {
            Logger.Tracer("getUser", error.message, error);
        }
    }

    static async getUsers(_req: Request, res: Response) {
        try {
            const info = await UserService.getUsers();
            if(!info) {
                return res.status(404).json({
                    message: "No record found."
                });
            }
            else {
                return res.status(200).json({
                    info: info
                });
            }
        } catch (error: any) {
            Logger.Tracer("getUsers", error.message, error);
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const info = await UserService.deleteUser(userId);
            if(!info) {
                return res.status(404).json({
                    message: "No record found."
                });
            }
            else {
                return res.status(200).json({
                    message: "User deleted successfully."
                });
            }
        } catch (error: any) {
            Logger.Tracer("deleteUser", error.message, error);
        }
    }

    static async updateUserInfo(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const info = await UserService.getUser(userId);
            if(!info) {
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
                
                await info.save();
                return res.status(200).json({
                    message: "User information updated successfully."
                });
            }
        } catch (error: any) {
            Logger.Tracer("updateUserInfo", error.message, error);
        }
    }
}

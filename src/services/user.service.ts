import { UserModel } from "../interfaces/user.interface";
import Model from "../models/User";
import { LoggerService } from "./logger.service";

const Logger = new LoggerService();

export class UserService {
    constructor() {}

    static async createNewUser(payload: UserModel): Promise<any> {
        try {
            return await Model.create(payload);
        } catch (error: any) {
         Logger.Tracer("Create New User", error.message, error);
        }
    }

    static async getUser(userId: string): Promise<any> {
        try {
            return await Model.findOne({ _id: userId });
        } catch (error: any) {
            Logger.Tracer("get a single user", error.message, error);
        }
    }

    static async getUsers(): Promise<any> {
        try {
            return await Model.find({});
        } catch (error: any) {
            Logger.Tracer("get users", error.message, error);
        }
    }

    static async deleteUser(userId: string): Promise<any> {
        try {
            return await Model.findOneAndDelete({ _id: userId});
        } catch (error: any) {
            Logger.Tracer("delete user", error.message, error);
        }
    }
}

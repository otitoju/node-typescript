"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
class LoggerService {
    constructor() { }
    Tracer(Method, Msg, Exception) {
        // return;
        console.log("HANDLE EX FROM -> " + Method + ": " + Msg, JSON.stringify(Exception));
    }
    Logger(Method, Msg) {
        //  return;
        console.log("ERROR FROM -> " + Method + " -> " + Msg);
    }
}
exports.LoggerService = LoggerService;

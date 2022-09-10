"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const Index_1 = __importDefault(require("./routes/Index"));
const PORT = 4000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", Index_1.default);
app.get("/", (_req, res) => {
    res.send(`Node and Typescript server`);
});
app.listen(PORT, () => {
    console.log(`⚡️[server]:Typescript server is using ${PORT}`);
});
mongoose_1.default.connect("mongodb://127.0.0.1/typescriptDB");

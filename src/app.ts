import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/Index';

const PORT: number = 4000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.get("/", (_req: Request, res: Response) => {
    res.send(`Node and Typescript server`);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]:Typescript server is using ${PORT}`);
});

mongoose.connect("mongodb://127.0.0.1/typescriptDB");


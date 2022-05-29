import cors from 'cors';
import { Application, json } from "express";

export const setupMiddlewares = (app : Application) => {

    app.use(cors());
    app.use(json());

}
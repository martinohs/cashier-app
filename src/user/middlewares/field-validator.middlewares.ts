import { NextFunction, Request, Response } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export const fieldsValidator = (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //>> Mejorar el res.status ??

        return res.status(400).json(errors);
    }

    next();
}
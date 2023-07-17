import {NextFunction, Request, Response} from "express";
import {ResponseError} from "../error/response-error";
import {ValidationError} from "joi";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(!err){
        next();
        return;
    }
    if (err instanceof ResponseError) {
        res.status(err.status).json({message: err.message}).end();
    } else if (err instanceof ValidationError) {
        res.status(400).json({message: err.message}).end();
    } else {
        res.status(500).json({message: err.message}).end();
    }
}

export {
    errorMiddleware
}
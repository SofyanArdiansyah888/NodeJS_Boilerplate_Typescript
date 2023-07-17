import {NextFunction, Request, Response} from "express";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({message: "register"}).status(200);
    } catch (e) {
        next(e)
    }
}

export default {
    register
}
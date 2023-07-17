import {NextFunction, Request, Response} from "express";
import userService from "../service/user-service";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json({data: user});
    } catch (e) {
        next(e)
    }
}

export default {
    register
}
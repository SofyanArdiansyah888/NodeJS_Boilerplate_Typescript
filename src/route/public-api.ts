
import {Request, Response, Router} from "express";
import userController from "../controller/user-controller";


const publicRouter = Router();
publicRouter.post("/api/register", userController.register);
publicRouter.post('/api/test',(req: Request, res: Response) => {
    return res.json({message:req.body});
})

export {
    publicRouter
}
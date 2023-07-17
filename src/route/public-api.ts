
import {Router} from "express";
import userController from "../controller/user-controller";


const publicRouter = Router();
publicRouter.post("/api/register", userController.register );


export {
    publicRouter
}
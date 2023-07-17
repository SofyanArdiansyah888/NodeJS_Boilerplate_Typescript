
import {Router} from "express";
import userController from "../controller/user-controller";


const publicRouter = Router();
publicRouter.post("/api/register", userController.register );
publicRouter.get('/api/test', (req, res) => {
    res.send('Hello World!');
})

export {
    publicRouter
}
import express from "express";
import {publicRouter} from "../route/public-api";
import {errorMiddleware} from "../middleware/error-middleware";
import bodyParser from "body-parser";
import {logger} from "./logging";

export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(publicRouter)

// REGISTER MIDDLEWARE ERROR 500,400,404 ETC...
app.use(errorMiddleware)

app.listen(3000, () => {
    logger.log('info', 'Server is running on port 3000');
});
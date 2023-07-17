import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors"
import post from "./routes/post";

// const prisma = new PrismaClient()
const app = express()

app.use(express.json())
post(app)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World 123!");
})

app.use((req: Request, res: Response, next: Function) => {
    next(createError(404))
})

app.listen(3000, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:3000`)
)
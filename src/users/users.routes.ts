import express, { Request, Response } from "express";

export const userRouter = express.Router();


userRouter.get('/users')
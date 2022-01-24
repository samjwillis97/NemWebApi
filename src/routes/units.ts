import express from "express";
import {get} from "../controllers/units";
const unitRouter = express.Router();

unitRouter.get("/", get);

export = unitRouter;
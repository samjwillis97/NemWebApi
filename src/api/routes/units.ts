import { Router, Request, Response, NextFunction } from "express";
import {getAllUnits, UnitFilter} from "../../models/units";

const route = Router();

export default (app: Router) => {
  app.use("/units", route)

  route.get("/", (req: Request, res: Response, next: NextFunction) => {
    let limit, offset, sort, filter = undefined
    if (req.query) {
      if (req.query.limit) {
        limit = parseInt(<string>req.query.limit)
      }
      if (req.query.offset) {
        offset = parseInt(<string>req.query.offset)
      }
      if (req.query.filter) {
        filter = <UnitFilter> req.query.filter
      }
      if (req.query.sort) {
        sort = <string> req.query.sort
      }
    }
    getAllUnits(
      (err: any, rows: any) => {
      if (err) {
        console.log(err)
        next(err)
        return;
      }
      return res.json(rows).status(200).end();
    },
    limit,
    offset,
    filter,
    sort)
  })
}
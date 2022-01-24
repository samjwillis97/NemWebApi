import { Request, Response, NextFunction } from "express";
import db from "../services/db"

export const get= async (req: Request, res: Response, next: NextFunction) => {
  let sql = "SELECT * FROM units"
  // Filter by Region ID, Fuel Source, Technology Type
  db.all(sql, [], (err: any, rows: any) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "data": rows
    });
  });
}

module.exports = {
  get
}
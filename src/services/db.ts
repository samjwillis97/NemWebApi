import config from "../config"

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(config.db.path)

export = db
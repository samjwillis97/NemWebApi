import express from "express";
import config from "./config";
import expressApp from "./loaders";

async function startServer() {
  let app = express();

  await expressApp(app)

  app.listen(config.api.port, () => {
    console.log(`Server Listening on ${config.api.port}`)
  }).on('error', err => {
    console.log(`Error: ${err}`)
    process.exit(1);
  })
}

startServer();
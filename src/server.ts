import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import express, { Express, Request, Response, NextFunction } from "express";
import config from './config'
import unitRouter from './routes/units';

const router: Express = express();

router.use(cors());
router.use(morgan('dev'));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.use('/units', unitRouter);
// data -> just takes an array of duid's to query influx

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('not found')
  return res.status(404).json({
    message: error.message
  })
})

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
  console.log(`Listening on port: ${config.server.port}`);
})

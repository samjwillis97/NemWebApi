import express, { Application, Request, Response, NextFunction } from "express";
import morgan from 'morgan';
import cors from 'cors';
import config from '../config';
import routes from '../api';

export default (app: Application) => {
  app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).end();
  });

  app.head('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).end();
  });

  // Shows the real origin IP in logs
  app.enable('trust proxy');

  // Enable Cross Origin Resource Sharing to all origins
  app.use(cors());

  // Transform raw string of req.body -> json
  app.use(express.json());

  // Morgan Logger
  app.use(morgan('short'))

  // Load API routes
  app.use(config.api.prefix, routes());

  // Catch 404 -> Forward to Error Handler
  // TODO: Read About NextFunction
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('not found')
    res.status(404)
    next(err)
  });

  // Error Handlers
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Handle 401 by express-jwt
    if (err.name === 'UnauthorizedError') {
      return res
        .send({message: err.message})
        .end();
    }
    return next(err)
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({
      message: err.message,
    })
  })
}


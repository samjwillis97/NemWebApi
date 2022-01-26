import { Router } from 'express';
import units from './routes/units';

export default () => {
  const app = Router();
  units(app);

  return app
}
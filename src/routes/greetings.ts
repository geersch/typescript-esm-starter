import { Request, Response, Router } from 'express';
import { appService } from '../services/app.service.js';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ greeting: appService.getHello() });
});

export default router;

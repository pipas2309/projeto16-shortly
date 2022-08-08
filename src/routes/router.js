import { Router } from 'express';

import authRouter from './authRouter.js';
import urlsRouter from './urlsRouter.js';
import usersRouter from './usersRouter.js';
import rankingsRouter from './rankingsRouter.js';


const router = Router();


router.use(authRouter);
router.use(urlsRouter);
router.use(usersRouter);
router.use(rankingsRouter);


export default router;
import express from 'express';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';
import accountRouter from './accounts.routes.js';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/conta', ensureAuthenticated, accountRouter);

export default router;

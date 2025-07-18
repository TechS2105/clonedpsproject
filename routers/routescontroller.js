import express from 'express';
import indexRoute from '../controllers/indexcontroller.js';

const router = express.Router();

router.get('/', indexRoute.indexRouter);

export default router;
import express from 'express';

import ranking from '../controllers/rankControllers.js';

const router = express.Router();


router.get("/ranking", ranking);


export default router;
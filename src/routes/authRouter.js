import express from 'express';

import validator from '../middlewares/schemasValidation.js';
import stripData from '../middlewares/stripData.js';
//import controllers

const router = express.Router();


router.post("/signin", stripData, validator('signIn') /**, controllers */);

router.post("/signup", stripData, validator('signUp') /**, controllers */);


export default router;
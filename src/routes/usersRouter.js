import express from 'express';

import allUserUrls from '../controllers/userControllers.js';
import tokenValidator from '../middlewares/tokensValidation.js';

//import controllers
//import tokenValidator

const router = express.Router();


router.get("/users/me", tokenValidator, allUserUrls );


export default router;
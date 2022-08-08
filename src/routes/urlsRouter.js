import express from 'express';

import { createShortenUrl, getUrlById } from '../controllers/urlControllers.js';
import validator from '../middlewares/schemasValidation.js';
import stripData from '../middlewares/stripData.js'; // É REALMENTE NECESSÁRIO????
import tokenValidator from '../middlewares/tokensValidation.js';
//import controllers
//import tokenValidator

const router = express.Router();

// tirar req.headers
router.post("/urls/shorten", tokenValidator, stripData, validator('shorten'), createShortenUrl);

router.get("/urls/:id", getUrlById);

router.get("/urls/open/:shortUrl",  /**, controllers */);

router.delete("/urls/:id", tokenValidator/**, controllers */);


export default router;
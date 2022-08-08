import express from 'express';

import { createShortenUrl, deleteShortUrl, getUrlById, openShortUrl } from '../controllers/urlControllers.js';
import validator from '../middlewares/schemasValidation.js';
import stripData from '../middlewares/stripData.js'; // É REALMENTE NECESSÁRIO????
import tokenValidator from '../middlewares/tokensValidation.js';


const router = express.Router();


router.post("/urls/shorten", tokenValidator, stripData, validator('shorten'), createShortenUrl);

router.get("/urls/:id", getUrlById);

router.get("/urls/open/:shortUrl", openShortUrl);

router.delete("/urls/:id", tokenValidator, deleteShortUrl);


export default router;